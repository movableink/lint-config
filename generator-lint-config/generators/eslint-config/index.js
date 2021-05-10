'use strict';

const Generator = require('yeoman-generator');
const _ = require('lodash');

// Inject the Install mixin
_.extend(Generator.prototype, require('yeoman-generator/lib/actions/install'));

function getAdditionalPackages(generator) {
  return [
    ...(generator.answers.types.includes('node') ? ['@movable/eslint-config-node'] : []),
    ...(generator.answers.types.includes('ember') ? ['@movable/eslint-config-ember'] : []),
    ...(generator.answers.types.includes('react') ? ['@movable/eslint-config-react'] : []),
    ...(generator.answers.types.includes('typescript')
      ? ['@movable/eslint-config-typescript']
      : []),
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
          { name: 'Ember', value: 'ember' },
          { name: 'React', value: 'react' },
          { name: 'TypeScript', value: 'typescript' },
        ],
      },
    ]);
  }

  writing() {
    // Configure `lint-staged` to run ESLint
    const pkg = this.fs.readJSON(this.destinationPath('package.json'));
    pkg['lint-staged'] = pkg['lint-staged'] || {};
    pkg['lint-staged'] = {
      '*.js': 'eslint --fix',
    };
    this.fs.writeJSON(this.destinationPath('package.json'), pkg);

    // Configure ESLint ignore
    this.fs.copy(this.templatePath('eslintignore'), this.destinationPath('.eslintignore'));

    // Set ESLint config
    this.fs.writeJSON(this.destinationPath('.eslintrc.json'), {
      extends: ['@movable/eslint-config', ...getAdditionalPackages(this)],
    });
  }

  install() {
    const installOptions = { dev: true };
    const pkg = this.fs.readJSON(this.destinationPath('package.json'));

    if (pkg && pkg.workspaces) {
      installOptions.ignoreWorkspaceRootCheck = true;
    }

    this.yarnInstall(
      ['@movable/eslint-config', 'eslint', ...getAdditionalPackages(this)],
      installOptions
    );
  }
};
