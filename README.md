# esbuild

With JSX (via preact) and TypeScript.

## steps

- `esbuild app.tsx --inject:./react-shim.js --jsx-factory=h --jsx-fragment=Fragment --bundle --watch --outfile=./dist/bundle.js --sourcemap`
- in root dir, `python -m http.server`
- hit `http://localhost:8000
