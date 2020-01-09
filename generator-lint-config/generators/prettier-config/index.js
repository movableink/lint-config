'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.copy(this.templatePath('prettierrc'), this.destinationPath('.prettierrc'));
  }

  install() {
    this.yarnInstall(['@movable/prettier-config'], { dev: true });
  }
};
