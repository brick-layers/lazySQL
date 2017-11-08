#!/usr/bin/env node
'use strict'

const program = require('commander')
const chalk = require('chalk')
const pkg = require('./package.json')

program
  .version(pkg.version)
  .command('lay <JSONPath> <buildPath>')
  .alias('l')
  .description('lay some model foundations')
  .action((JSONPath, buildPath) => {
    console.log(chalk.green('json path:'), JSONPath)
    console.log(chalk.green('build destination path:'), buildPath)
  })

program.parse(process.argv)
