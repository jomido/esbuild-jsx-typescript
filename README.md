# A Refreshing Frontend Experience

> _The audacity to use the word 'refreshing' here is utterly astounding. It
> immediately foments suspicion, contempt, disdain._
>
> --ImaginaryNPC4490

Choices made (_requirement_ -> _dependency_):

- bundler -> [esbuild](https://esbuild.github.io/)
- components -> [Preact](https://preactjs.com/)
- formatting -> [Prettier](https://prettier.io/)
- html -> [JSX](https://facebook.github.io/jsx/)
- linting -> [ESLint](https://eslint.org/)
- static types -> [TypeScript](https://www.typescriptlang.org/)

## Quick Start

- npm: 16+
- python (optional): 3.6+

```
npm install
npm run check:format
npm run check:lint
npm run check:types
npm run build
npm run build:watch
python -m http.server
```

http://localhost:8000

## Assumptions

Assumes a UNIX-y environment.

## The Quick Start is Too Quick

In root dir:

- `npm install`
- `npm run build:watch`

In another terminal, also root dir:

- `python -m http.server`, or, if you do not have Python installed
- `npx serve -p 8000 .` (answer `Y` to install, if asked)

In the browser:

- hit `http://localhost:8000`

## Why

I don't want to use webpack anymore.

I don't want to use a major frontend framework anymore. No angular, react, vue,
svelte, or whatever the Mighty Things are when you read this.

I _do_ want the following, tho:

- JSX: preferred over plain HTML and/or templating mini-langs
- a functional component model: preferred over a class-based component model

This means I've got to use a bundler/transpiler. A compiler would be best, but
that does not exist yet for my requirements. Which means webpack, right? No
longer. Enter the ~~dragon~~ esbuild.

The above requirements also (thus far) have me choosing preact. It:

- is tiny and operates like a library, not a framework
- has a functional component model, via hooks, which can handle local state,
  global state, and side-effect emission
- works well with TypeScript

You can read the docs in under an hour (imperiously ignore any sections
referencing class-based components):

- https://preactjs.com/guide/v10/getting-started

### Preact? I Thought You Did not Want a Framework

ikr?

Aside from the fact that Preact is a library, not a framework, I'm not entirely
convinced of this choice. But after trawling the binary seas, preact does seem
like the simplest way to get both JSX and a functional component model.

It's the component model requirement that has me here. Reusable components
(functional or not) are, well, a must. One can begin to implement them. If one
does, one seems to be re-inventing preact or hyperapp. There is nothing wrong
with that - both of these libraries are small. But this time (unlike many other
times), I'm choosing not to. It sure feels sus, tho.

### An Ideal

Would be a compiler (like Svelte) that,

- uses JSX rather than YATL (Yet Another Templating Language), and
- has a functional component model, and
- admits the beneficence of TypeScript

This does not exist. Svelte is so close.

## Linting/Formatting

```
npm run check:format
npm run check:lint
```

To make `prettier` auto-format, use `prettier --write .`. CI should just fail,
here, though, so `--check` is more appropriate at the command line. Auto-
formatting is best when expressly visible to a human being at the time of
formatting.

### Editor Integration

You'll have to read the docs for both eslint and prettier to set this up. But
you should have a situation where saving a file causes these things to happen:

- eslint fixes any auto-fixable errors (like removing/adding semicolons)
- prettier auto-formats the file (by, say, breaking up a long line of code)

If you _don't_ set this up, the command line invocations above (or a variation
of them) should be at play in CI anyhow.

## Type Checking

```
npm run check:types
```

## Is This Really Refreshing To You? Look at All of These Files

Yes, there are a lot of top-level files, here. But take a look at the
`package.json`:

```
{
  "dependencies": {
    "preact": "^10.7.1"
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^5.22.0",
    "@typescript-eslint/parser": "^5.22.0",
    "esbuild": "^0.14.38",
    "eslint": "^8.14.0",
    "eslint-config-prettier": "^8.5.0",
    "prettier": "^2.6.2"
  },
  "scripts": {
    "build:watch": ". scripts/build:watch.sh",
    "build": ". scripts/build.sh",
    "check:format": ". scripts/check:types",
    "check:lint": ". scripts/check:lint",
    "check:types": ". scripts/check:types.sh"
  }
}
```

For a `package.json`, that's pretty darn light. If our ideal were realized (and
we had a compiler), then `"dependencies"` would be an empty `{}` (yay!).

## Going Forth

> _There is not even a `src` dir, what the hell - just an `index.html` and an
> `app.tsx`._
>
> --ImaginaryNPC68117

To use this repo as a base, you'll likely create the equivalent of a `src` dir,
and move your app files there. If you do, be aware that some files reference the
root `app.tsx` directly. You'll need to change those. They are:

- `package.json`
- `scripts/*`

The `index.html` references the `dist` folder directly. (esbuild is told to
push a `bundle.js` there.) You may have to tweak this.

## What's With These Imaginary NPC's?

Unfortunately, I do not own an imaginary shotgun. Oh, what, what's this...
