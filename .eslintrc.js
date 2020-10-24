module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "cypress/globals": true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint", "cypress", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    project: ["./tsconfig.eslint.json"],
  },
  rules: {},
};
