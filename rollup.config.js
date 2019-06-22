const share = {
  input: 'src/index.js',
};

export default [
  {
    ...share,
    output: {
      file: 'lib/logger.js',
      format: 'cjs',
      exports: 'named',
    },
  },
];
