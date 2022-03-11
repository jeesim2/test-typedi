'use strict';

module.exports = {
  diff: true,
  extension: ['ts'],
  reporter: 'spec',
  recursive: true,
  require: ['ts-node/register', 'test/mocha.require.ts', 'reflect-metadata'],
  spec: 'app/**/*.spec.ts',
  watch: false
}
