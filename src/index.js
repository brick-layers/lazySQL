const fs = require('fs')
const prettier = require('prettier')
const Model = require('./models')

const operator = (buildPath, data) => {
  // Write seperate file for each key of input
  Object.keys(data).forEach(key => {
    const model = new Model(key, data[key])
    writeFile(buildPath, model.filename, model.output)
  })
}

const writeFile = (buildPath, fileName, content) => {
  if (!fs.existsSync(buildPath)) {
    fs.mkdirSync(buildPath)
  }
  content = prettier.format(content, { semi: false })
  fs.writeFile(`${buildPath}/${fileName}`, content, err => {
    if (err) console.log(err)
  })
}

module.exports = { operator }
