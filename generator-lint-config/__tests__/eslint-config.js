'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const fs = require('fs-extra');

function run() {
  return helpers.run(path.join(__dirname, '../generators/eslint-config')).inTmpDir(function (dir) {
    const done = this.async();
    fs.copy(path.join(__dirname, './fixtures/normal-repo'), dir, done);
  });
}

it('it creates an ESLint ignore file', async () => {
  await run();

  assert.file(['.eslintignore']);
});

describe('generating config files', () => {
  it('creates a base config by default', async () => {
    await run();

    assert.JSONFileContent('.eslintrc.json', {
      extends: ['@movable/eslint-config'],
    });
  });

  it('creates a Node config', async () => {
    await run().withPrompts({
      types: ['node'],
    });

    assert.JSONFileContent('.eslintrc.json', {
      extends: ['@movable/eslint-config', '@movable/eslint-config-node'],
    });
  });

  it('creates an Ember config', async () => {
    await run().withPrompts({
      types: ['ember'],
    });

    assert.JSONFileContent('.eslintrc.json', {
      extends: ['@movable/eslint-config', '@movable/eslint-config-ember'],
    });
  });

  it('creates a React config', async () => {
    await run().withPrompts({
      types: ['react'],
    });

    assert.JSONFileContent('.eslintrc.json', {
      extends: ['@movable/eslint-config', '@movable/eslint-config-react'],
    });
  });

  it('creates a TypeScript config', async () => {
    await run().withPrompts({
      types: ['typescript'],
    });

    assert.JSONFileContent('.eslintrc.json', {
      extends: ['@movable/eslint-config', '@movable/eslint-config-typescript'],
    });
  });
});
