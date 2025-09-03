import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";
import js from "@eslint/js"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
  recommendedConfig: js.configs.recommended 
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  {
    ignores: [
      ".next/",
      "out/",
      "node_modules/",
      ".eslintrc.json", 
    ],
  },
  ...compat.extends(
    "eslint:recommended",
    "next/core-web-vitals",
  "plugin:@typescript-eslint/recommended"
  ),
  {
    plugins: {
  '@typescript-eslint': compat.plugins("@typescript-eslint/eslint-plugin")[0].plugins['@typescript-eslint'],
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        React: "readonly",
      },
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
  "react/jsx-key": "warn",
      "@next/next/no-page-custom-font": "off",
      "@next/next/no-img-element": "off", 
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
  "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "eqeqeq": ["error", "always"],
  "curly": ["warn", "all"],
      "quotes": ["warn", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

export default eslintConfig;