// @ts-nocheck

import eslint from "@eslint/js";
import solid from "eslint-plugin-solid/dist/configs/typescript.js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "dist/*",
      // Temporary compiled files
      "**/*.ts.build-*.mjs",

      ".vercel/*",
      // JS files at the root of the project
      "*.js",
      "*.cjs",
      "*.mjs",
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        1,
        {
          argsIgnorePattern: "^_",
        },
      ],
    },
  },

  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    ...solid,
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
);
