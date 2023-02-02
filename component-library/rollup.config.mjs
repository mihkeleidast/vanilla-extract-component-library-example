import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcssImport from "postcss-import";
import postcssEnv from "postcss-preset-env";
import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const globals = {
  react: "React",
  "react-dom": "ReactDOM",
  "core-js": "core-js",
  "@vanilla-extract/css": "@vanilla-extract/css",
};

const globalModules = Object.keys(globals);

const sourceMap = true;

export default {
  input: {
    index: "./src/index.ts",
    base: "./src/base.css",
  },
  treeshake: false,
  output: {
    dir: "dist",
    format: "esm",
    globals,
    sourcemap: sourceMap,
    preserveModules: true,
    generatedCode: {
      constBindings: true,
    },
  },
  plugins: [
    vanillaExtractPlugin(),
    resolve({ extensions }),
    commonjs({
      include: "**/node_modules/**",
    }),
    babel({
      sourceMap,
      extensions,
      include: ["src/**/*"],
      exclude: ["node_modules/**", "**/*.css"],
      babelHelpers: "bundled",
    }),
    postcss({
      plugins: [postcssImport(), postcssEnv()],
      namedExports: true,
      sourceMap,
      configFile: false,
      extract: true,
      preserveModules: true,
    }),
  ],
  external: (id) => globalModules.includes(id) || /core-js/.test(id),
};
