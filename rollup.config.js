import babel from "rollup-plugin-babel";

const share = {
  input: "src/index.js",
  plugins: [babel({ exclude: "node_modules/**" })]
};

export default [
  {
    ...share,
    output: {
      file: "lib/logger.js",
      format: "cjs",
      exports: "named"
    },
    plugins: [...share.plugins]
  }
];
