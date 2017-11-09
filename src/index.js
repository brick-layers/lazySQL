const fs = require('fs')

const Model = require('./models')
const Bricks = require('./bricks')

function operator (buildPath, data) {
  // Write seperate file for each key of input
  Object.keys(data).forEach(key => {
    const model = new Model(key, data[key])
    let content = model.parse()
    console.log(content)
    addBricks(content)
    console.log(content)
    // writeFile(buildPath, model.filename, model.parse())
  })
}

function writeFile (buildPath, fileName, content) {
  fs.writeFile(`${buildPath}/${fileName}`, content, err => {
    console.log(err)
  })
}

function addBricks (body) {
  body = Bricks.addHeader(body)
  body = Bricks.addFooter(body)
}

module.exports = { operator }
