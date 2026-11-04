import { createAudioPlayer, setAudioModeAsync, type AudioPlayer } from 'expo-audio';

const SOURCES = {
  /** Ketukan tombol dan pilihan. */
  tap: require('@/assets/sounds/tap.wav'),
  /** Jawaban benar. */
  correct: require('@/assets/sounds/correct.wav'),
  /** Jawaban belum tepat. */
  wrong: require('@/assets/sounds/wrong.wav'),
  /** Materi, latihan, atau ujian selesai. */
  complete: require('@/assets/sounds/complete.wav'),
} as const;

export type SoundName = keyof typeof SOURCES;

const players = new Map<SoundName, AudioPlayer>();
let audioModeReady = false;

/** Putar efek suara pendek. Gagal memutar suara tidak boleh mengganggu belajar. */
export function playSound(name: SoundName) {
  try {
    if (!audioModeReady) {
      audioModeReady = true;
      // Efek suara ikut tombol senyap HP dan tidak menghentikan musik dari aplikasi lain.
      setAudioModeAsync({ playsInSilentMode: false, interruptionMode: 'mixWithOthers' }).catch(() => {});
    }
    let player = players.get(name);
    if (!player) {
      player = createAudioPlayer(SOURCES[name]);
      players.set(name, player);
    }
    player.seekTo(0).catch(() => {});
    player.play();
  } catch {
    // Abaikan: suara hanya pelengkap.
  }
}

/** Bungkus handler onPress agar bunyi "tik" saat diketuk. */
export function withTap<Args extends unknown[]>(handler?: (...args: Args) => void) {
  return (...args: Args) => {
    playSound('tap');
    handler?.(...args);
  };
}
