const { ESLint } = require('eslint');

const eslint = new ESLint({
  cwd: __dirname,
  baseConfig: require('./index'),
  useEslintrc: false,
});

/**
 * @typedef {import('eslint').Linter.LintMessage} LintMessage
 */

/**
 * @param {LintMessage[]} messages
 * @return {LintMessage[]}
 */
function getParsingErrors(messages) {
  return messages.filter((message) => message.message.includes('Parsing error:'));
}

test('it parses a file with decorators', async () => {
  const [error] = await eslint.lintText(`
    @classDecorator
    class Foo {
      @methodDecorator
      method() {}
    }
  `);

  expect(getParsingErrors(error.messages)).toEqual([]);
});

test('it parses top-level await', async () => {
  const [error] = await eslint.lintText(`
    await Promise.resolve();
  `);

  expect(getParsingErrors(error.messages)).toEqual([]);
});
