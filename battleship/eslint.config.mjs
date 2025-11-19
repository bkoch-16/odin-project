import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];

module.exports = {
  // ... other ESLint configurations
  env: {
    jest: true, // Enables Jest globals
  },
  extends: [
    // ... other ESLint extensions
    "plugin:jest/recommended", // Uses recommended Jest rules
  ],
  plugins: [
    // ... other ESLint plugins
    "jest",
  ],
  rules: {
    // ... your project-specific rules
  },
};
