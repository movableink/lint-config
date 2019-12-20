# @movable/prettier-config

## Installation

To start using `@movable/prettier-config`, add it to your `devDependencies` by running:

```bash
yarn add -D @movable/prettier-config
```

Note that Prettier is required to be in your `devDependencies` as well; you should add this yourself:

```bash
yarn add -D prettier
```

You should then configure Prettier to use the configuration by adding the following to your `package.json`:

```diff
{
+ "prettier": "@movable/prettier-config"
}
```

This ensures that not only the ESLint configuration will use the shared configuration, but also any tooling like `vscode-prettier` or `coc.nvim`.
