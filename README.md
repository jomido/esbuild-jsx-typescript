# esbuild

With JSX (via preact) TypeScript, and (ESLint + Prettier)

## steps

In root dir:

- `esbuild app.tsx --inject:./react-shim.js --jsx-factory=h --jsx-fragment=Fragment --bundle --watch --outfile=./dist/bundle.js --sourcemap`
- `python -m http.server`
- hit `http://localhost:8000`

## notes

### linting/formatting

Using ESLint + Prettier.

Command line use:

```
npx eslint .
npx prettier --check .
```

To make `prettier` auto-format, use `npx prettier --write .`. CI should just
fail, here, though, so `--check` is more appropriate at the command line. Auto-
formatting is best when expressly visible to a human being at the time of
formatting.

#### editor integration

You'll have to read the docs for both eslint and prettier to set this up. But
you should have a situation where saving a file causes these things to happen:

- eslint fixes any auto-fixable errors (like removing/adding semicolons)
- prettier auto-formats the file (by, say, breaking up a long line of code)

If you _don't_ set this up, the command line invocations above (or a variation
of them if npx is unavailable) should be at play in CI anyhow.
