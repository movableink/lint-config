'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const fs = require('fs-extra');

beforeAll(() => {
  return helpers.run(path.join(__dirname, '../../generators/app')).inTmpDir(function (dir) {
    const done = this.async();
    fs.copy(path.join(__dirname, '../fixtures/normal-repo'), dir, done);
  });
});

test('it runs the ESLint generator', () => {
  assert.file(['.eslintignore']);
});

test('it runs the Prettier generator', () => {
  assert.file(['.prettierrc']);
});
