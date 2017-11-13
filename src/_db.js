class Db {
  constructor (data) {
    this.URI = data.URI
    this.options = data.options === undefined ? '' : data.options
    this.output = ''

    // magic
    this.addImports()
    this.initDb()
    this.addExports()
  }

  addImports () {
    this.output = "const Sequelize = require('sequelize')\n\n"
  }

  initDb () {
    this.output += `const db = new Sequelize('${this.URI}'${this.options &&
      ', ' + JSON.stringify(this.options)})\n\n`
  }

  addExports () {
    this.output += 'module.exports = db\n'
  }
}

module.exports = Db
