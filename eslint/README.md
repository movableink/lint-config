# `@movable/eslint-config`

## Installation

To start using this package, add it to your `devDependencies` by running:

```bash
yarn add -D @movable/eslint-config
```

Note that ESLint and Prettier are both required to be in your `devDependencies` as well; you should add these yourself:

```bash
yarn add -D eslint prettier
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
