# lint-config

![CI](https://github.com/movableink/lint-config/workflows/CI/badge.svg)

> Shared linter configuration for Movable Ink

This repo contains shared configuration files for various static analysis tools. See the linked documentation below for more information on each.

- [ESLint](./eslint/base/README.md)
- [Prettier](./prettier-config/README.md)

It also provides a [Yeoman generator](./generator-lint-config/README.md) that can be used to configure the above tools for you.

## Recommended Setup

The quickest and easiest way to configure your project with one of these configurations is to run the following:

```bash
yarn create @movable/lint-config
```

You will be asked a few questions about your project, and once answered, the any dependencies and required configuration will be taken care of for you.
