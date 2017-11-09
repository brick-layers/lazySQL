#!/usr/bin/env node
'use strict'

const program = require('commander')
const chalk = require('chalk')
const pkg = require('./package.json')
const fs = require('fs')

const operator = require('./src').operator

program
  .version(pkg.version)
  .command('lay <JSONPath> <buildPath>')
  .alias('l')
  .description('lay some model foundations')
  .action((JSONPath, buildPath) => {
    console.log(chalk.blue('json path:'), JSONPath)
    console.log(chalk.blue('build destination path:'), buildPath)
    fs.readFile(JSONPath, (err, data) => {
      if (err) throw err
      // insert logic
      operator(buildPath, JSON.parse(data))
    })
  })

program.parse(process.argv)
