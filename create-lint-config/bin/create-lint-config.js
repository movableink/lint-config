#!/usr/bin/env node

const yeoman = require('yeoman-environment');
const env = yeoman.createEnv();

env.register(require.resolve('@movable/generator-lint-config'), 'lint-config:app');

env.run('lint-config:app');
