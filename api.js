const fs = require('fs')
const { operator, createConfigFile } = require('./src')

const api = (inputFile, outputPath) => {
  fs.readFile(inputFile, (err, data) => {
    if (err) throw err
    operator(outputPath, JSON.parse(data))
  })
}

module.exports = { api, createConfigFile }
