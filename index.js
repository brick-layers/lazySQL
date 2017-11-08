#!/usr/bin/env node
'use strict'

const program = require('commander')
const pkg = require('./package.json')

program
  .version(pkg.version)
  .command('lay <JSONPath> <buildPath>')
  .alias('l')
  .description('lay some model foundations')
  .action((JSONPath, buildPath) => {
    console.log('json path:', JSONPath)
    console.log('build destination path:', buildPath)
  })

program.parse(process.argv)
