'use strict';

const { ESLint } = require('eslint');
const { Factory } = require('file-fixture-factory');

const eslint = new ESLint({
  baseConfig: {
    root: true,
    extends: [require.resolve('../base'), require.resolve('./')],
  },
  useEslintrc: false,
});
const factory = new Factory('movable-eslint-config-react');

afterAll(async function () {
  await factory.disposeAll();
});

test('the configuration', async () => {
  const tmp = await factory.createStructure({
    'index.js': '',
  });
  const config = await eslint.calculateConfigForFile(tmp.path('index.js'));

  expect(config.parserOptions.ecmaFeatures).toEqual({
    jsx: true,
    legacyDecorators: true,
  });
  expect(config.rules['prettier/prettier']).toEqual(['error']);
  expect(config.settings).toEqual({
    react: {
      version: 'detect',
    },
  });
});
