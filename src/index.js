const fs = require('fs')

const Model = require('./models')

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
}

const writeFile = (buildPath, fileName, content) => {
  if (!fs.existsSync(buildPath)) {
    fs.mkdirSync(buildPath)
  }

  fs.writeFile(`${buildPath}/${fileName}`, content, err => {
    if (err) console.log(err)
  })
}

module.exports = { operator }
