'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

beforeAll(() => {
  return helpers.run(path.join(__dirname, '../../generators/app'));
});

test('it runs the ESLint generator', () => {
  assert.file(['.eslintignore']);
});

test('it runs the Prettier generator', () => {
  assert.file(['.prettierrc']);
});
