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

test('it configures Husky to run lint-staged', () => {
  assert.jsonFileContent('package.json', { husky: { hooks: { 'pre-commit': 'lint-staged' } } });
});

test('it configures lint-staged to run ESLint', () => {
  assert.jsonFileContent('package.json', { 'lint-staged': { '*.js': 'eslint --fix' } });
});
