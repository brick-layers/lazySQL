const fs = require('fs')

const Db = require('./_db')
const Index = require('./_index')
const Model = require('./_models')
const ModelIndex = require('./_models-index')
const prettier = require('prettier')

const PRETTIER_SETTINGS = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none'
}

const operator = (buildPath, data) => {
  // Create root index file
  const index = new Index()
  createFile(buildPath, 'index.js', index.output)

  // Create db file
  const db = new Db(data.db)
  createFile(buildPath, 'db.js', db.output)

  // Create array of Models
  const models = Object.keys(data.models).map(
    key => new Model(key, data.models[key])
  )

  // Write file for each model in /models directory
  models.forEach(model =>
    createFile(buildPath + '/models', model.filename, model.output)
  )

  // Create /models/index.js file
  // handles model associations
  const modelIndex = new ModelIndex(models, data.associations)
  createFile(buildPath + '/models', 'index.js', modelIndex.output)
}

const checkPath = buildPath => {
  if (!fs.existsSync(buildPath)) {
    fs.mkdirSync(buildPath)
  }
}

const writeFile = (buildPath, fileName, content) => {
  fs.writeFile(`${buildPath}/${fileName}`, content, err => {
    if (err) console.log(err)
  })
}

const createFile = (buildPath, fileName, content) => {
  checkPath(buildPath)
  content = prettier.format(content, PRETTIER_SETTINGS)
  writeFile(buildPath, fileName, content)
}

const prettierFixForJSON = content => {
  const fPrettier = 'const file = '
  content = fPrettier + JSON.stringify(content, null, '\t')
  content = prettier.format(content, PRETTIER_SETTINGS)
  content = content.slice(fPrettier.length)
  return content
}

const createConfigFile = (fileName, buildPath, jsObj) => {
  checkPath(buildPath)
  // const formattedObject = prettierFixForJSON(jsObj)
  const formattedObject = JSON.stringify(jsObj)
  writeFile(buildPath, fileName, formattedObject)
  console.log(`created configuration file: ${fileName} in ${buildPath}`)
}

module.exports = { operator, createConfigFile }
