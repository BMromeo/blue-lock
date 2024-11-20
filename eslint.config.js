import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.node,
    },
    plugins: ["node"],
    rules: {
      "no-console": "off",
    },
  },
  pluginJs.configs.recommended,
];
