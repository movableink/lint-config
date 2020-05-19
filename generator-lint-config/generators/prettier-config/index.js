'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.copy(this.templatePath('prettierrc'), this.destinationPath('.prettierrc'));
  }

  install() {
    const installOptions = { dev: true };
    const pkg = this.fs.readJSON(this.destinationPath('package.json'));

    if (pkg && pkg.workspaces) {
      installOptions.ignoreWorkspaceRootCheck = true;
    }

    this.yarnInstall(['@movable/prettier-config'], installOptions);
  }
};
