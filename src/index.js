const fs = require('fs')

const Model = require('./_models')
const Index = require('./_models-index')
const prettier = require('prettier')

const operator = (buildPath, data) => {
  // Create /destination directory
  if (!fs.existsSync(buildPath)) {
    fs.mkdirSync(buildPath)
  }

  // Create array of Models
  const models = Object.keys(data.models).map(
    key => new Model(key, data.models[key])
  )

  // Write file for each model in /models directory
  models.forEach(model =>
    writeFile(buildPath + '/models', model.filename, model.output)
  )

  // Create /models/index.js file
  const index = new Index(models)
  console.log(index.output)
  writeFile(buildPath + '/models', 'index.js', index.output)
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
