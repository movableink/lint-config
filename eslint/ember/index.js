'use strict';

const {
  DEFAULT_IGNORED_PROPERTIES,
} = require('eslint-plugin-ember/lib/rules/avoid-leaking-state-in-ember-objects');

module.exports = {
  extends: ['plugin:ember/base'],
  rules: {
    // Recommended rules as of `eslint-plugin-ember@7.11.0`
    // Hard-coded here to release dependency bump without a breaking change
    'ember/alias-model-in-controller': 'off',
    'ember/avoid-using-needs-in-controllers': 'error',
    'ember/classic-decorator-hooks': 'off',
    'ember/classic-decorator-no-classic-methods': 'off',
    'ember/closure-actions': 'error',
    'ember/computed-property-getters': 'off',
    'ember/jquery-ember-run': 'error',
    'ember/named-functions-in-promises': 'off',
    'ember/new-module-imports': 'error',
    'ember/no-actions-hash': 'off',
    'ember/no-arrow-function-computed-properties': 'error',
    'ember/no-attrs-in-components': 'error',
    'ember/no-attrs-snapshot': 'error',
    'ember/no-capital-letters-in-routes': 'error',
    'ember/no-classic-classes': 'off',
    'ember/no-classic-components': 'off',
    'ember/no-component-lifecycle-hooks': 'off',
    'ember/no-computed-properties-in-native-classes': 'off',
    'ember/no-controllers': 'off',
    'ember/no-deeply-nested-dependent-keys-with-each': 'error',
    'ember/no-duplicate-dependent-keys': 'error',
    'ember/no-ember-super-in-es-classes': 'error',
    'ember/no-ember-testing-in-module-scope': 'error',
    'ember/no-empty-attrs': 'off',
    'ember/no-function-prototype-extensions': 'error',
    'ember/no-get-with-default': 'off',
    'ember/no-get': 'off',
    'ember/no-global-jquery': 'error',
    'ember/no-incorrect-calls-with-inline-anonymous-functions': 'error',
    'ember/no-incorrect-computed-macros': 'off',
    'ember/no-invalid-debug-function-arguments': 'error',
    'ember/no-invalid-dependent-keys': 'off',
    'ember/no-jquery': 'off',
    'ember/no-legacy-test-waiters': 'off',
    'ember/no-mixins': 'off',
    'ember/no-old-shims': 'error',
    'ember/no-pause-test': 'off',
    'ember/no-private-routing-service': 'off',
    'ember/no-proxies': 'off',
    'ember/no-replace-test-comments': 'off',
    'ember/no-restricted-resolver-tests': 'error',
    'ember/no-test-and-then': 'off',
    'ember/no-test-import-export': 'off',
    'ember/no-test-module-for': 'off',
    'ember/no-unnecessary-index-route': 'off',
    'ember/no-unnecessary-route-path-option': 'error',
    'ember/no-unnecessary-service-injection-argument': 'off',
    'ember/order-in-components': 'off',
    'ember/order-in-controllers': 'off',
    'ember/order-in-models': 'off',
    'ember/order-in-routes': 'off',
    'ember/require-computed-macros': 'off',
    'ember/require-computed-property-dependencies': 'off',
    'ember/require-super-in-lifecycle-hooks': 'error',
    'ember/require-tagless-components': 'off',
    'ember/route-path-style': 'off',
    'ember/routes-segments-snake-case': 'error',
    'ember/use-ember-data-rfc-395-imports': 'off',
    'ember/use-ember-get-and-set': 'off',

    // Overrides to default rules
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
