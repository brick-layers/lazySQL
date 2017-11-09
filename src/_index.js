class Index {
  constructor () {
    this.output = ''

    this.addImports()
    this.addExports()
  }

  addImports () {
    this.output = "const db = require('./db')\n"
    this.output += "require('./models')\n\n"
  }

  addExports () {
    this.output += 'module.exports = db\n'
  }
}

module.exports = Index
