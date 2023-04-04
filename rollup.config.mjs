import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";

export default {
  input: "src/App.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    postcss({
      extract: true,
    }),
    image(),
  ],
};
