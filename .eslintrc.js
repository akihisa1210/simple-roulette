module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "cypress/globals": true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["cypress"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
};
