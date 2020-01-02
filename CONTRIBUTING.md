# Contributing

## Commit Format

This project follows the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for formatting commit messages. This allows for the automatic generation of a `CHANGELOG` in each package and helps to publish semver-correct versions of each package automatically.

Some commit "types" to work with might include

- `feat`
- `fix`
- `chore`

It can also be helpful to apply a scope matching the name of the package being altered.

## Publishing Changes

Changes should be published using `lerna`, so that version numbers are bumped correctly in each package.

As a shortcut, you can run

```bash
yarn release
```

Which will run `lerna publish` with the `--conventional-commits` flag.
