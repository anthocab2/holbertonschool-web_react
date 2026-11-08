// Local namespace build used by task_4/package.json.
const fs = require('node:fs');
const path = require('node:path');

const ts = process.argv[2]
  ? require(path.resolve(process.argv[2]))
  : require('typescript');

const configPath = path.join(__dirname, 'tsconfig.json');
const config = ts.readConfigFile(configPath, ts.sys.readFile);
const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, __dirname);
const orderedSources = [
  'subjects/Teacher.ts',
  'subjects/Subject.ts',
  'subjects/Cpp.ts',
  'subjects/Java.ts',
  'subjects/React.ts',
  'main.ts',
].map((name) => path.join(__dirname, 'js', name));

const options = {
  ...parsed.options,
  module: ts.ModuleKind.CommonJS,
  sourceMap: false,
  noEmitOnError: true,
};
const host = ts.createCompilerHost(options);
const emitted = new Map();
host.writeFile = (fileName, content, _bom, _onError, sources) => {
  if (fileName.endsWith('.js')) {
    for (const source of sources || []) {
      emitted.set(path.resolve(source.fileName), content);
    }
  }
};

const program = ts.createProgram(orderedSources, options, host);
const diagnostics = [
  ...(config.error ? [config.error] : []),
  ...parsed.errors,
  ...ts.getPreEmitDiagnostics(program),
];
if (diagnostics.length) {
  console.error(ts.formatDiagnosticsWithColorAndContext(diagnostics, {
    getCanonicalFileName: (name) => name,
    getCurrentDirectory: ts.sys.getCurrentDirectory,
    getNewLine: () => '\n',
  }));
  process.exit(1);
}

const result = program.emit();
if (result.emitSkipped || result.diagnostics.length) {
  throw new Error('TypeScript could not emit the namespace bundle.');
}

// Keep the namespace declarations and the exported main in one runtime scope.
const output = orderedSources.map((source) => {
  const content = emitted.get(path.resolve(source));
  if (content === undefined) {
    throw new Error(`Missing compiled source: ${source}`);
  }
  return content;
}).join('\n');

fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'dist', 'main.js'), `${output}\n`);
console.log('task_4: types checked; dist/main.js generated.');
