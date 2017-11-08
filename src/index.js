const fs = require('fs')

const Model = require('./models')

function operator (buildPath, data) {
  console.log('data', data)
  Object.keys(data).forEach(key => {
    const model = new Model(key, data[key])
    writeFile(buildPath, model.filename, model.parse())
  })
}

function writeFile (buildPath, fileName, content) {
  fs.writeFile(`${buildPath}/${fileName}`, content, err => {
    console.log(err)
  })
}

module.exports = { operator, Model }
