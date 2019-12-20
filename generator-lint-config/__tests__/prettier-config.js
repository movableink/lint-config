'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

beforeAll(() => {
  return helpers.run(path.join(__dirname, '../generators/prettier-config'));
});

it('creates a Prettier config file', () => {
  assert.file(['.prettierrc']);
});
