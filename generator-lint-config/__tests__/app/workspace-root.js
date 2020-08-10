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

test('it installs the ESLint config', () => {
  assert.fileContent('package.json', '@movable/eslint-config');
  assert.fileContent('package.json', '@movable/prettier-config');
});

test('it installs the Prettier config', () => {
  assert.fileContent('package.json', '@movable/eslint-config');
  assert.fileContent('package.json', '@movable/prettier-config');
});
