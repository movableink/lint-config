'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'checkbox',
        name: 'types',
        message: 'Which ESLint configurations do you want to enable?',
        default: [],
        choices: [
          { name: 'Base', value: 'base', disabled: 'Required' },
          { name: 'Node', value: 'node' },
          { name: 'Ember', value: 'ember' }
        ]
      }
    ]);
  }

  writing() {
    this.fs.copy(this.templatePath('eslintignore'), this.destinationPath('.eslintignore'));

    const additionalConfigs = [
      ...(this.answers.types.includes('node') ? ['@movable/eslint-config/node'] : []),
      ...(this.answers.types.includes('ember') ? ['@movable/eslint-config/ember'] : [])
    ];

    this.fs.writeJSON(this.destinationPath('.eslintrc.json'), {
      extends: ['@movable/eslint-config', ...additionalConfigs]
    });
  }

  install() {
    this.yarnInstall(['@movable/eslint-config'], { dev: true });
  }
};
