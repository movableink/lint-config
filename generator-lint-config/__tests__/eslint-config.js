'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

function run() {
  return helpers.run(path.join(__dirname, '../generators/eslint-config'));
}

it('it creates an ESLint ignore file', async () => {
  await run();

  assert.file(['.eslintignore']);
});

describe('generating config files', () => {
  it('creates a base config by default', async () => {
    await run();

    assert.JSONFileContent('.eslintrc.json', {
      extends: ['@movable/eslint-config']
    });
  });

  it('creates a Node config', async () => {
    await run().withPrompts({
      types: ['node']
    });

    assert.JSONFileContent('.eslintrc.json', {
      extends: ['@movable/eslint-config', '@movable/eslint-config/node']
    });
  });

  it('creates an Ember config', async () => {
    await run().withPrompts({
      types: ['ember']
    });

    assert.JSONFileContent('.eslintrc.json', {
      extends: ['@movable/eslint-config', '@movable/eslint-config/ember']
    });
  });
});
