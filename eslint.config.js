import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: ["@eslint/js"],
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      "no-unused-vars": "warn"
    }
  },
  pluginReact.configs.flat?.recommended ?? {},
  {
    files: ["**/*.json"],
    plugins: ["@eslint/json"],
    languageOptions: { parser: "json" },
    extends: ["json/recommended"]
  },
  {
    files: ["**/*.jsonc"],
    plugins: ["@eslint/json"],
    languageOptions: { parser: "jsonc" },
    extends: ["json/recommended"]
  }
]);

