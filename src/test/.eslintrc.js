module.exports = {
  extends: "../../.eslintrc.js",
  env: {
    mocha: true
  },
  rules: {
    "no-unused-vars": ["error", { varsIgnorePattern: "should" }]
  }
};
