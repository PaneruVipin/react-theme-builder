import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const plugins = [
  external(),
  resolve({ extensions }),
  babel({ extensions, babelHelpers: "bundled" }),
  commonjs(),
  terser(),
  postcss({
    plugins: [autoprefixer(), cssnano()],
    extract: true,
    extensions: [".css"],
  }),
];

export default [
  {
    input: "src/App.js",
    output: [
      {
        file: "dist/themeToolkit.js",
        name:"hii",
        format: "umd",
        sourcemap: true,
        globals: {
          react: 'React',
          'common-coding-tools/random': 'random'
        }
      },
      {
        file: "dist/themeToolkit.esm.js",
        format: "es",
        sourcemap: true,
      },
      {
        file: "dist/themeToolkit.umd.js",
        format: 'umd',
        name: 'MyGlobalModule',
        globals: {
          react: 'React',
          'common-coding-tools/random': 'random'
        }
      },
    ],
    plugins,
    external: ['react'],
  },
];
