class Model {
  constructor (name, fields) {
    this.name = name
    this.filename = name + '.js'
    this.fields = fields
    this.output = null
    // magic happens in here
    // return: formatted string for write file
    this.inputToString()
    this.addModelWrapper()
    this.addHeader()
    this.addFooter()
  }

  inputToString () {
    this.output = JSON.stringify(this.fields, null, 2)
  }

  // add header (required dependencies)
  addHeader () {
    this.output =
      "const Sequelize = require('sequelize')\nconst db = require('../db')\n\n" +
      this.output
  }

  // add footer (module.exports)
  addFooter () {
    this.output = this.output + '\nmodule.exports = { Product }\n'
  }

  // add db.define (or something)
  addModelWrapper () {
    this.output = "const Product = db.define('product', " + this.output + ')\n'
  }

  // add instance methods
}

module.exports = Model
