# @movable/lint-config

Shared lint configuration for Movable Ink

## Installation

To start using `@movable/lint-config`, add it to your `devDependencies` by running:

```bash
yarn add -D @movable/lint-config
```

Note that this will install ESLint and Prettier for you, so you _do not_ need to have these dependencies listed in your own project. This helps us to keep versions consistent across projects.

### Prettier

Configure your project to extend from the [shared Prettier configuration](https://prettier.io/docs/en/configuration.html#sharing-configurations) by creating a file called `.prettierrc` in the root of your project:

```text
"@movable/lint-config/prettier"
```

It is recommended that you configure Prettier this way so that tools like `vscode-prettier` can read the file and fix files automatically for you.

### ESLint

A few ESLint configurations are provided, based on the kind of environment you are working in.

* [Base](./eslint/index.js')
* [Node](./eslint/node.js')

This sets up some shared rules, as well as configuring ESLint to run Prettier (so that both projects do not have to be run independently). You can extend from the base configuration like so:

```javascript
// .eslintrc.js
module.exports = {
  extends: '@movable/lint-config/eslint'
}
```

An environment-specific configuration can be used instead by providing the path to that file instead:

```javascript
// .eslintrc.js
module.exports = {
  extends: '@movable/lint-config/eslint/node'
}
```

## Linting Your Project

You can lint your project by running

```bash
yarn eslint . --fix
```

This will automatically fix any fixable issues (like those that Prettier can solve) and report any others for you to fix yourself.
