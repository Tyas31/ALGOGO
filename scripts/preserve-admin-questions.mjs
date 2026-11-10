// Generated question IDs stay below 1000; admin-authored questions have reserved IDs.
export function preserveAdminQuestions(documents, existing) {
  const metadata = new Map(existing.filter((item) => item.path.split('/').length === 2).map((item) => [item.path, item.data]));
  const extras = existing.filter((item) => /^levels\/\d+\/questions\/\d+$/.test(item.path) && item.data.source === 'admin');
  return documents.map((item) => {
    if (item.path.split('/').length !== 2) return item;
    const questions = extras.filter((extra) => extra.path.startsWith(`${item.path}/questions/`));
    if (!questions.length) return item;
    const nextAdminQuestionId = Math.max(metadata.get(item.path)?.nextAdminQuestionId ?? 999, ...questions.map((question) => question.data.id));
    return { ...item, data: { ...item.data, questionCount: item.data.questionCount + questions.length, nextAdminQuestionId } };
  });
}
