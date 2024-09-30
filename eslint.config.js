import js from '@eslint/js'; // Base JavaScript config
import reactPlugin from 'eslint-plugin-react';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser'; // Import TypeScript parser
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  // Base JavaScript config
  js.configs.recommended,

  // TypeScript and React configs, included directly in the array
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tsParser, // Use TypeScript parser
      globals: {
        window: true,
        document: true,
        console: true,
      },
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': tsEslintPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error', // Prettier formatting rules
      'react/react-in-jsx-scope': 'off', // No need for React import in React 17+
      '@typescript-eslint/no-unused-vars': 'warn', // Warn for unused vars in TypeScript
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  },

  // Add Prettier-specific configurations to avoid conflict
  prettierConfig,
];
