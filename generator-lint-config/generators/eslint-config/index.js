'use strict';

const Generator = require('yeoman-generator');

function getAdditionalPackages(generator) {
  return [
    ...(generator.answers.types.includes('node') ? ['@movable/eslint-config-node'] : []),
    ...(generator.answers.types.includes('ember') ? ['@movable/eslint-config-ember'] : [])
  ];
}

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

    this.fs.writeJSON(this.destinationPath('.eslintrc.json'), {
      extends: ['@movable/eslint-config', ...getAdditionalPackages(this)]
    });
  }

  install() {
    this.yarnInstall(['@movable/eslint-config', ...getAdditionalPackages(this)], { dev: true });
  }
};
