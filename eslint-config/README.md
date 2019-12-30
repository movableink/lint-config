# `@movable/eslint-config`

## Installation

The easiest way to set up this configuration is to leverage the Yeoman generator by running the following in the root of your project:

```bash
yarn create @movable/lint-config
```

This will ask you some questions about your project and set up the configuration for you based on the answers.

---

If you want to configure your project manually, you can do the following:

Add this package, as well as ESLint and Prettier, to your `devDependencies` by running:

```bash
yarn add -D @movable/eslint-config eslint prettier
```

## Configuration

A few ESLint configurations are provided, based on the kind of environment you are working in.

- [Base](./index.js')
- [Node](./node.js')

This sets up some shared rules, as well as configuring ESLint to run Prettier (so that both projects do not have to be run independently). You can extend from the base configuration like so:

```javascript
// .eslintrc.js
module.exports = {
  extends: '@movable/eslint-config'
};
```

Environment-specific configurations can be included as well to better suit different use-cases:

```javascript
// .eslintrc.js
module.exports = {
  extends: ['@movable/eslint-config', '@movable/eslint-config/node']
};
```

## Linting Your Project

It is recommended that you add the following `package.json` to create an easy way to run ESLint from the command line:

```diff
{
  "scripts": {
+   "lint": "eslint ."
  }
}
```

This allows you to run the following:

```bash
yarn lint # Report errors in your project
yarn lint --fix # Fix anything that can be fixed automatically, and report everything else
```
