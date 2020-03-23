'use strict';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    es6: true,
  },
};
