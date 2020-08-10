'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  initializing() {
    this.composeWith(require.resolve('../prettier-config'));
    this.composeWith(require.resolve('../eslint-config'));
  }

  writing() {
    const pkg = this.fs.readJSON(this.destinationPath('package.json'));
    pkg.husky = {
      hooks: {
        'pre-commit': 'lint-staged',
      },
    };

    this.fs.writeJSON(this.destinationPath('package.json'), pkg);
  }

  install() {
    const installOptions = { dev: true };
    const pkg = this.fs.readJSON(this.destinationPath('package.json'));

    if (pkg && pkg.workspaces) {
      installOptions.ignoreWorkspaceRootCheck = true;
    }

    this.yarnInstall(['husky', 'lint-staged'], installOptions);
  }
};
