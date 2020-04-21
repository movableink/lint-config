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
  plugins: ['@movable/no-wildcard-postmessage'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:no-unsanitized/DOM'],
  env: {
    es6: true,
  },
  rules: {
    '@movable/no-wildcard-postmessage/no-wildcard-postmessage': 'error',
  },
};
