'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const fs = require('fs-extra');

beforeAll(() => {
  return helpers
    .run(path.join(__dirname, '../../generators/app'))
    .inTmpDir(function (dir) {
      const done = this.async();
      fs.copy(path.join(__dirname, '../fixtures/mono-repo'), dir, done);
    })
    .withOptions({ 'skip-install': false });
});

test('it runs the ESLint generator', () => {
  assert.fileContent('package.json', '@movable/eslint-config');
  assert.fileContent('package.json', '@movable/prettier-config');
});
