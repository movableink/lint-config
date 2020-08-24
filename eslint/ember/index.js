'use strict';

const {
  DEFAULT_IGNORED_PROPERTIES,
} = require('eslint-plugin-ember/lib/rules/avoid-leaking-state-in-ember-objects');

module.exports = {
  extends: ['plugin:ember/recommended'],
  rules: {
    'ember/avoid-leaking-state-in-ember-objects': [
      'error',
      [...DEFAULT_IGNORED_PROPERTIES, 'customEvents'],
    ],

    // Recommended rules, temporarily disabled
    'ember/no-new-mixins': 0,
    'ember/no-observers': 0,
    'ember/no-on-calls-in-components': 0,
    'ember/no-side-effects': 0,
    'ember/no-volatile-computed-properties': 0,
    'ember/require-return-from-computed': 0,
    'ember/use-brace-expansion': 0,
  },
  globals: {
    // Ensure that `fetch` is imported from `ember-fetch`
    // https://github.com/ember-cli/ember-fetch
    fetch: 'off',
  },
  overrides: [
    {
      files: ['**/mirage/**'],
      rules: {
        // Mirage often uses an array as a prop to define relationships
        'ember/avoid-leaking-state-in-ember-objects': 'off',
      },
    },
    {
      files: ['**/tests/**'],
      plugins: ['qunit'],
      extends: ['plugin:qunit/recommended'],
      rules: {
        // We don't _really_ care of test stubs leak state
        'ember/avoid-leaking-state-in-ember-objects': 'off',
      },
    },
  ],
};
