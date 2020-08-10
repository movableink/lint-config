'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const fs = require('fs-extra');

const TIMEOUT_MS = 10000;

beforeAll(() => {
  return helpers
    .run(path.join(__dirname, '../../generators/app'))
    .inTmpDir(function (dir) {
      const done = this.async();
      fs.copy(path.join(__dirname, '../fixtures/mono-repo'), dir, done);
    })
    .withOptions({ 'skip-install': false });
}, TIMEOUT_MS);

test('it installs the expected packages in the workspace root', () => {
  // ESLint install works correctly
  assert.fileContent('package.json', '@movable/eslint-config');

  // Prettier install works correctly
  assert.fileContent('package.json', '@movable/prettier-config');

  // Husky/lint-staged install works correctly
  assert.fileContent('package.json', 'husky');
  assert.fileContent('package.json', 'lint-staged');
});
