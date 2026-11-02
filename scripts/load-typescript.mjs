import { readFile } from 'node:fs/promises';
import ts from 'typescript';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

// These pure data modules use type-only imports, so they run without Metro or image assets.
export async function loadTypeScript(path) {
  const source = await readFile(new URL(path, import.meta.url), 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
}

// Load repository service modules for explicit live smoke tests without adding a
// test bundler. Only trusted source files are transpiled, never submitted Python.
export function loadService(relative) {
  const require = createRequire(new URL('../package.json', import.meta.url));
  const cache = new Map();
  function load(name) {
    if (cache.has(name)) return cache.get(name).exports;
    const source = readFileSync(new URL(`../src/${name}.ts`, import.meta.url), 'utf8');
    const { outputText } = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    });
    const module = { exports: {} };
    cache.set(name, module);
    const resolve = (specifier) => specifier.startsWith('@/') ? load(specifier.slice(2)) : require(specifier);
    new Function('require', 'module', 'exports', outputText)(resolve, module, module.exports);
    return module.exports;
  }
  return load(relative);
}
