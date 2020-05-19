'use strict';

module.exports = {
  overrides: [
    // Use `overrides` to configurs TS files so that we can avoid needing
    // to use the `--ext` flag to lint TypeScript files
    // See https://github.com/eslint/rfcs/pull/20
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['**/tests/**/*.{js,jsx,ts,tsx}'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
};
