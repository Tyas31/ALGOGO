import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { applicationDefault } from 'firebase-admin/app';
import { loadTypeScript } from './load-typescript.mjs';

// Evaluate the real Rules language without publishing rules or writing documents.
export async function testProgressRules({ projectId, credential }) {
  const rules = await readFile(new URL('../firestore.rules', import.meta.url), 'utf8');
  const functions = rules.slice(rules.indexOf('function signedIn()'), rules.indexOf('match /users/{uid}'));
  assert.ok(functions.includes('function validLevels('));
  const source = `rules_version = '2'; service cloud.firestore {
    match /databases/{database}/documents {
      ${functions}
      match /__rules_regression__/{id} {
        allow get: if validLevels(resource.data.completedLevels)
          && resource.data.xp == xpAfter(resource.data.completedLevels.size());
      }
    }
  }`;
  const { LEVEL_XP } = await loadTypeScript('../src/lib/progress-state.ts');
  const cases = Array.from({ length: LEVEL_XP.length + 1 }, (_, count) => ({
    name: `${count} completed levels`, expectation: 'ALLOW',
    completedLevels: Array.from({ length: count }, (_, index) => index + 1),
    xp: LEVEL_XP.slice(0, count).reduce((sum, value) => sum + value, 0),
  }));
  cases.push(
    { name: 'skip first level', expectation: 'DENY', completedLevels: [2], xp: 50 },
    { name: 'skip middle level', expectation: 'DENY', completedLevels: [1, 3], xp: 100 },
    { name: 'duplicate level', expectation: 'DENY', completedLevels: [1, 1], xp: 100 },
    { name: 'invalid level zero', expectation: 'DENY', completedLevels: [0], xp: 50 },
    { name: 'extra level', expectation: 'DENY', completedLevels: Array.from({ length: LEVEL_XP.length + 1 }, (_, index) => index + 1), xp: 1900 },
    { name: 'forged XP', expectation: 'DENY', completedLevels: [], xp: 9999 },
  );
  const token = await credential.getAccessToken();
  const response = await fetch(`https://firebaserules.googleapis.com/v1/projects/${encodeURIComponent(projectId)}:test`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token.access_token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source: { files: [{ name: 'progress-regression.rules', content: source }] },
      testSuite: { testCases: cases.map(({ expectation, completedLevels, xp }) => ({
        expectation,
        request: { method: 'get', path: '/databases/(default)/documents/__rules_regression__/progress' },
        resource: { data: { completedLevels, xp } },
        expressionReportLevel: 'FULL',
      })) },
    }),
  });
  const result = await response.json();
  assert.ok(response.ok, result.error?.message || `Rules API HTTP ${response.status}`);
  assert.equal(result.issues?.filter((issue) => issue.severity === 'ERROR').length ?? 0, 0);
  assert.equal(result.testResults?.length, cases.length);
  const directory = new URL('../.expo/verification/upgrade-33/', import.meta.url);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('rules-state-tests.json', directory), JSON.stringify({ projectId, cases, result }, null, 2));
  result.testResults.forEach((test, index) => {
    assert.equal(test.state, 'SUCCESS', `${cases[index].name}: ${test.debugMessages?.join('; ') || test.state}`);
  });
  console.log(`PASS ${cases.length} Rules API cases: empty progress, every completed prefix, and invalid levels/XP.`);
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  await testProgressRules({
    projectId: process.env.FIREBASE_PROJECT_ID || 'algogo-af45b',
    credential: applicationDefault(),
  });
}
