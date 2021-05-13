'use strict';

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:react/recommended'],
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
};
