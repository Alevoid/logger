module.exports = {
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module"
  },
  parser: "babel-eslint",
  plugins: ["prettier", "babel", "import"],
  env: {
    es6: true,
    browser: true
  },
  globals: {
    module: true
  },
  rules: {
    "babel/no-invalid-this": "error",
    "babel/semi": "warn",
    "babel/no-unused-expressions": "warn",
    "prettier/prettier": [
      "error",
      {
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        singleQuote: true,
        bracketSpacing: true,
        trailingComma: "all"
      }
    ],
    eqeqeq: ["error", "always"],
    "no-var": ["error"],
    "object-curly-spacing": ["error", "always"],
    "no-console": ["error", { allow: ["error", "warn"] }]
  }
};
