import type { QuestionData } from '@/data/curriculum';

const RESERVED = new Set(('print input int float str bool range len sum type True False None if elif else for in while break continue and or not match case _ pass').split(' '));

function lineTokens(line: string): string[] | null {
  const tokens: string[] = [];
  let index = 0;
  while (index < line.length) {
    const character = line[index];
    if (/\s/.test(character)) { index++; continue; }
    if (character === '#') break;
    if (character === '"' || character === "'") {
      const quote = character;
      let value = '';
      let closed = false;
      index++;
      while (index < line.length) {
        const current = line[index++];
        if (current === quote) { closed = true; break; }
        if (current === '\\') {
          if (index >= line.length) return null;
          const escape = line[index++];
          const escapes: Record<string, string> = { n: '\n', t: '\t', r: '\r', '\\': '\\', '"': '"', "'": "'" };
          value += escapes[escape] ?? `\\${escape}`;
        } else value += current;
      }
      if (!closed) return null;
      tokens.push(`string:${JSON.stringify(value)}`);
      continue;
    }
    const match = line.slice(index).match(/^(?:[A-Za-z_]\w*|\d+(?:\.\d+)?|==|!=|<=|>=|\+=|-=|\*=|\/\/|\*\*|[=+\-*\/%<>()\[\],:])/);
    if (!match) return null;
    tokens.push(match[0]);
    index += match[0].length;
  }
  return tokens;
}

// Compare the taught Python forms without running submitted code. Keep literal spaces
// and block structure significant, while accepting variable names and quote styles.
export function normalizedPython(code: string): string | null {
  const result: string[] = [];
  const names = new Map<string, string>();
  const indents = [0];
  let requiresIndent = false;
  for (const raw of code.replace(/\r\n?/g, '\n').split('\n')) {
    const line = raw.replace(/^[\t ]+/, (indent) => indent.replace(/\t/g, '    ')).trimEnd();
    if (!line.trim() || line.trimStart().startsWith('#')) continue;
    const width = line.length - line.trimStart().length;
    const previous = indents[indents.length - 1];
    if (width > previous) {
      if (!requiresIndent) return null;
      indents.push(width); result.push('INDENT');
    } else {
      if (requiresIndent) return null;
      while (width < indents[indents.length - 1]) { indents.pop(); result.push('DEDENT'); }
      if (width !== indents[indents.length - 1]) return null;
    }
    const tokens = lineTokens(line.trimStart());
    if (!tokens?.length) return null;
    requiresIndent = tokens[tokens.length - 1] === ':';
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (token === 'input' && tokens[i + 1] === '(' &&
          (tokens[i + 2] === ')' || (tokens[i + 2]?.startsWith('string:') && tokens[i + 3] === ')'))) {
        result.push('input', '(', 'INPUT_PROMPT', ')');
        i += tokens[i + 2] === ')' ? 2 : 3;
      } else if (/^[A-Za-z_]\w*$/.test(token) && !RESERVED.has(token)) {
        if (!names.has(token)) names.set(token, `variable:${names.size}`);
        result.push(names.get(token)!);
      } else result.push(token);
    }
    result.push('NEWLINE');
  }
  if (requiresIndent || result.length === 0) return null;
  while (indents.length > 1) { indents.pop(); result.push('DEDENT'); }
  return JSON.stringify(result);
}

export function isCorrectAnswer(question: QuestionData, answer: string | string[]): boolean {
  if (question.type === 'order') {
    return Array.isArray(answer) && JSON.stringify(answer) === JSON.stringify(question.correctOrder);
  }
  if (typeof answer !== 'string') return false;
  if (question.type !== 'write') return answer === question.correctAnswer;
  const normalized = normalizedPython(answer);
  return normalized !== null && (question.acceptedAnswers ?? [question.correctAnswer])
    .some((expected) => normalizedPython(expected) === normalized);
}
