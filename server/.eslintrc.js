module.exports = {
  env: { node: true, es2020: true },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "no-console": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
