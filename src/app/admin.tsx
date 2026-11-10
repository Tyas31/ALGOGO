import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import type { QueryDocumentSnapshot } from 'firebase/firestore';

import { Button } from '@/components/ngulik/button';
import { Screen } from '@/components/ngulik/screen';
import { Text } from '@/components/ngulik/text';
import { TextField } from '@/components/ngulik/text-field';
import { Colors, Radius, Spacing } from '@/constants/theme';
import type { QuestionType } from '@/data/curriculum';
import { LEVEL_CATALOG } from '@/data/level-catalog';
import { errorMessage } from '@/lib/errors';
import type { QuestionDraft } from '@/lib/admin-question';
import { addQuestion, listStudents, listStudentAttempts, type AdminStudent, type AdminAttempt } from '@/services/admin';

const TYPES: { value: QuestionType; label: string }[] = [
  { value: 'choice', label: 'Pilihan ganda' }, { value: 'blank', label: 'Isi bagian kosong' },
  { value: 'order', label: 'Susun kode' }, { value: 'output', label: 'Tebak output' }, { value: 'write', label: 'Tulis kode' },
];

export default function AdminScreen() {
  const [pane, setPane] = useState<'questions' | 'grades'>('questions');
  const [levelText, setLevelText] = useState('1');
  const [kind, setKind] = useState<QuestionType>('choice');
  const [title, setTitle] = useState('');
  const [prompt, setPrompt] = useState('');
  const [code, setCode] = useState('');
  const [options, setOptions] = useState('');
  const [answer, setAnswer] = useState('');
  const [explanation, setExplanation] = useState('');
  const [review, setReview] = useState('');
  const [busy, setBusy] = useState(false);
  const saving = useRef(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [students, setStudents] = useState<AdminStudent[]>([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<AdminStudent | null>(null);
  const [attempts, setAttempts] = useState<AdminAttempt[]>([]);
  const [cursor, setCursor] = useState<QueryDocumentSnapshot>();
  const [loadingGrades, setLoadingGrades] = useState(false);
  const gradeRequest = useRef(0);
  const levelId = Number(levelText);
  const level = LEVEL_CATALOG.find((item) => item.id === levelId);

  useEffect(() => {
    if (pane !== 'grades') return;
    let cancelled = false;
    listStudents().then((items) => { if (!cancelled) setStudents(items); })
      .catch((failure) => { if (!cancelled) setError(errorMessage(failure)); });
    return () => { cancelled = true; };
  }, [pane]);

  const save = async () => {
    if (saving.current) return;
    saving.current = true;
    setBusy(true); setError(''); setMessage('');
    try {
      if (!level) throw new Error('Pilih nomor level 1–33.');
      const draft: QuestionDraft = {
        type: kind, title: title.trim(), prompt: prompt.trim(), correctAnswer: kind === 'order' ? '' : answer.trimEnd(),
        explanation: { correct: explanation.trim(), wrong: explanation.trim() },
        ...(code.trim() && kind !== 'blank' ? { codeSnippet: code.trimEnd() } : {}),
        ...(review.trim() ? { reviewLevelIds: review.split(',').map((value) => Number(value.trim())) } : {}),
      };
      const choices = options.split('\n').map((value) => value.trim()).filter(Boolean);
      if (kind === 'choice' || kind === 'output') draft.options = choices;
      if (kind === 'blank') { draft.chips = choices; draft.codeTemplate = code.trimEnd(); }
      if (kind === 'order') {
        draft.correctOrder = answer.split('\n').filter((line) => line.trim());
        draft.stepItems = [...draft.correctOrder];
        for (let i = draft.stepItems.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [draft.stepItems[i], draft.stepItems[j]] = [draft.stepItems[j], draft.stepItems[i]];
        }
      }
      await addQuestion(levelId, draft);
      setMessage(`Soal berhasil ditambahkan ke Level ${levelId}.`);
      setTitle(''); setPrompt(''); setCode(''); setOptions(''); setAnswer(''); setExplanation(''); setReview('');
    } catch (failure) { setError(errorMessage(failure)); }
    finally { saving.current = false; setBusy(false); }
  };

  const showGrades = async (student: AdminStudent, more = false) => {
    const request = ++gradeRequest.current;
    setSelected(student); setLoadingGrades(true); setError('');
    if (!more) { setAttempts([]); setCursor(undefined); }
    try {
      const page = await listStudentAttempts(student.uid, more ? cursor : undefined);
      if (request !== gradeRequest.current) return;
      setAttempts((previous) => more ? [...previous, ...page.attempts] : page.attempts);
      setCursor(page.cursor);
    } catch (failure) { if (request === gradeRequest.current) setError(errorMessage(failure)); }
    finally { if (request === gradeRequest.current) setLoadingGrades(false); }
  };

  return <Screen header={<View style={styles.header}>
    <Pressable accessibilityRole="button" disabled={busy} onPress={() => router.back()}><Text color="primaryDepth">‹ Kembali</Text></Pressable>
    <Text variant="headline">Panel Admin</Text>
  </View>}>
    <View style={styles.tabs}>
      <Choice label="Tambah Soal" active={pane === 'questions'} disabled={busy} onPress={() => { setPane('questions'); setError(''); }} />
      <Choice label="Nilai Peserta" active={pane === 'grades'} disabled={busy} onPress={() => { setPane('grades'); setError(''); setMessage(''); }} />
    </View>
    {!!error && <Text accessibilityRole="alert" color="danger">{error}</Text>}
    {!!message && <Text accessibilityRole="alert" color="primaryDepth">{message}</Text>}
    {pane === 'questions' ? <>
      <Text color="inkSoft">Soal tambahan langsung ikut kuis pada level yang dipilih. Hadiah XP dan batas kelulusan mengikuti aturan level tersebut.</Text>
      <TextField label="Nomor level" value={levelText} onChangeText={setLevelText} keyboardType="number-pad" editable={!busy} />
      <Text color="inkSoft">{level ? `Level ${level.id}: ${level.title}` : 'Masukkan nomor level 1–33.'}</Text>
      <View style={styles.tabs}>{TYPES.map((type) => <Choice key={type.value} label={type.label} active={kind === type.value} disabled={busy} onPress={() => { setKind(type.value); setAnswer(''); setOptions(''); }} />)}</View>
      <TextField label="Judul soal" value={title} onChangeText={setTitle} editable={!busy} maxLength={200} />
      <TextField label="Pertanyaan" value={prompt} onChangeText={setPrompt} editable={!busy} multiline style={styles.multiline} maxLength={10000} />
      <TextField label={kind === 'blank' ? 'Kode dengan bagian kosong (___)' : 'Contoh kode (opsional)'} value={code} onChangeText={setCode} editable={!busy} multiline autoCapitalize="none" autoCorrect={false} style={styles.multiline} maxLength={10000} />
      {(kind === 'choice' || kind === 'output' || kind === 'blank') && <TextField label="Pilihan jawaban (satu per baris)" value={options} onChangeText={setOptions} editable={!busy} multiline autoCapitalize="none" style={styles.multiline} />}
      <TextField label={kind === 'order' ? 'Baris kode dalam urutan benar' : kind === 'write' ? 'Contoh jawaban kode yang benar' : 'Kunci jawaban (sama persis dengan pilihan)'} value={answer} onChangeText={setAnswer} editable={!busy} multiline autoCapitalize="none" autoCorrect={false} style={styles.multiline} />
      {kind === 'order' && <Text color="inkSoft">Baris kode akan diacak saat ditampilkan kepada peserta. Pertahankan indentasi dan baris yang berulang.</Text>}
      <TextField label="Pembahasan" value={explanation} onChangeText={setExplanation} editable={!busy} multiline style={styles.multiline} maxLength={10000} />
      {levelId >= 31 && <TextField label="Level ulasan (pisahkan dengan koma, misalnya 1,2)" value={review} onChangeText={setReview} editable={!busy} />}
      <Button label={busy ? 'Menyimpan...' : 'Simpan Soal'} disabled={busy} onPress={save} />
    </> : <>
      <Text color="inkSoft">Peserta yang sudah pernah masuk ke aplikasi. Pilih peserta untuk melihat riwayat nilainya.</Text>
      <TextField label="Cari peserta" value={search} onChangeText={setSearch} autoCapitalize="none" />
      {students.filter((student) => `${student.name} ${student.email}`.toLowerCase().includes(search.toLowerCase())).map((student) => <Pressable accessibilityRole="button" key={student.uid} accessibilityLabel={`Lihat nilai ${student.name}`} onPress={() => showGrades(student)} style={[styles.card, selected?.uid === student.uid && styles.selected]}>
        <Text variant="bodyStrong">{student.name}</Text><Text variant="caption" color="inkSoft">{student.email}</Text>
      </Pressable>)}
      {selected && <Text variant="headline">Nilai {selected.name}</Text>}
      {loadingGrades && <Text>Memuat nilai...</Text>}
      {selected && !loadingGrades && !attempts.length && <Text color="inkSoft">Peserta ini belum menyelesaikan kuis.</Text>}
      {attempts.map((attempt) => <View key={attempt.id} style={styles.card}>
        <Text variant="bodyStrong">Level {attempt.levelId} · Nilai {attempt.score}</Text>
        <Text>{attempt.correctCount}/{attempt.totalQuestions} jawaban benar</Text>
        <Text variant="caption" color="inkSoft">{attempt.completedAt ? new Date(attempt.completedAt).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }) : 'Waktu belum tersedia'}</Text>
      </View>)}
      {selected && cursor && <Button label="Muat nilai sebelumnya" disabled={loadingGrades} onPress={() => showGrades(selected, true)} />}
    </>}
  </Screen>;
}

function Choice({ label, active, disabled, onPress }: { label: string; active: boolean; disabled?: boolean; onPress: () => void }) {
  return <Pressable accessibilityRole="button" accessibilityState={{ selected: active, disabled }} disabled={disabled} onPress={onPress} style={[styles.chip, active && styles.selected]}><Text variant="label">{label}</Text></Pressable>;
}

const styles = StyleSheet.create({
  header: { gap: Spacing[2] },
  tabs: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing[2] },
  chip: { padding: Spacing[3], borderWidth: 1, borderColor: Colors.line, borderRadius: Radius.md },
  selected: { borderColor: Colors.primary, backgroundColor: Colors.surfaceRaised },
  card: { padding: Spacing[3], borderWidth: 1, borderColor: Colors.line, borderRadius: Radius.md, gap: Spacing[1] },
  multiline: { height: 112, textAlignVertical: 'top', paddingVertical: Spacing[3] },
});
