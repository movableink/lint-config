'use strict';

module.exports = {
  parserOptions: {
    babelOptions: {
      plugins: [require.resolve('@babel/plugin-syntax-jsx')],
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
  overrides: [
    {
      files: ['**/tests/**/*.{js,jsx,ts,tsx}'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
