# Vanilla Extract Component Library Example

> This is a modified version of Luke Channings' component library example that uses CSS Modules: https://github.com/LukeChannings/component-library-example

Building a component library is hard, and a big part of that comes from the tooling needed to make it work.

If your component library has 100 components, but the project you're working on only needs 3 or 4 of them, should you have to import the JavaScript and CSS for all of it? **No**.

This is an example project with two components:

- **component-library**: a toy component library with two atomic components: Button and Checkbox. It uses TypeScript, React, and Vanilla Extract, and it's compiled into tree-shakable ESM, with TypeScript definitions and source maps in the distribution.
- **example-consumer**: A minimal React app, compiled with Webpack, and configured so that only the components you use end up in your production bundle.

## Structure

```bash
.
├── package.json # contains babelrc, browserslist, peerDependencies, sideEffects and module configuration.
├── rollup.config.js #
├── src
│   ├── index.ts # Entrypoint. Exports all modules. Can be tree-shaken.
│   ├── base.css # Base CSS, includes a reset (modern-css-reset).
│   │── variables
│   │   └── colors.css.ts # Vanilla Extract global theme, sets colors on :root.
│   ├── components
│   │   └── atoms
│   │       ├── Button
│   │       │   ├── Button.css.ts
│   │       │   └── Button.tsx
│   │       └── Checkbox
│   │           ├── Checkbox.css.ts
│   │           └── Checkbox.tsx
├── tsconfig.json # TypeScript configuration, only emits declaration files
```

## How to set up this project

Usually, a component library would be built and the `dist` folder released in an NPM module.
But in the interest of demonstration, both projects can be compiled and linked using the script below.

```bash
cd component-library
npm i
npm run build
npm link
cd -

cd example-consumer
npm i
npm link component-library
cd -
```

## Using the project

Run the consumer example with `npm start`.
Build a production bundle with `npm run build -- --mode=production`.
To debug what's in the bundle, use `npm run build` and look at the output.
