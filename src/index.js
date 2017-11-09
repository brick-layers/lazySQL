const fs = require('fs')

const Db = require('./_db')
const Index = require('./_index')
const Model = require('./_models')
const ModelIndex = require('./_models-index')
const prettier = require('prettier')

const operator = (buildPath, data) => {
  // Create /destination directory
  if (!fs.existsSync(buildPath)) {
    fs.mkdirSync(buildPath)
  }

  // Create root index file
  const index = new Index()
  writeFile(buildPath, 'index.js', index.output)

  // Create db file
  const db = new Db(data.db)
  writeFile(buildPath, 'db.js', db.output)

  // Create array of Models
  const models = Object.keys(data.models).map(
    key => new Model(key, data.models[key])
  )

  // Write file for each model in /models directory
  models.forEach(model =>
    writeFile(buildPath + '/models', model.filename, model.output)
  )

  // Create /models/index.js file
  const modelIndex = new ModelIndex(models, data.associations)
  writeFile(buildPath + '/models', 'index.js', modelIndex.output)
}

const writeFile = (buildPath, fileName, content) => {
  if (!fs.existsSync(buildPath)) {
    fs.mkdirSync(buildPath)
  }
  content = prettier.format(content, { semi: false, singleQuote: true })
  fs.writeFile(`${buildPath}/${fileName}`, content, err => {
    if (err) console.log(err)
  })
}

module.exports = { operator }
