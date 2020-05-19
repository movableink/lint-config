'use strict';

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:react/recommended', 'prettier/react'],
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/tests/**/*.{js,jsx,ts,tsx}'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
