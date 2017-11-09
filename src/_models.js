class Model {
  constructor (name, fields) {
    this.name = name
    this.filename = name + '.js'
    this.fields = fields
    this.output = ''
    // magic happens in here
    // return: formatted string for write file
    this.inputToString()
    this.addModelWrapper()
    this.addHeader()
    this.addFooter()
  }

  inputToString () {
    this.output = this.objToString(this.fields)
  }

  objToString (obj) {
    var str = '{\n'
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        if (typeof obj[p] === 'object') {
          str += p + ': \n' + this.objToString(obj[p]) + ',\n'
        } else {
          str += p + ':' + obj[p] + ',\n'
        }
      }
    }
    str += '}'
    return str
  }

  // add header (required dependencies)
  addHeader () {
    this.output =
      "const Sequelize = require('sequelize')\nconst db = require('../db')\n\n" +
      this.output
  }

  // add footer (module.exports)
  addFooter () {
    this.output = this.output + `\nmodule.exports = { ${this.name} }\n`
  }

  // add db.define (or something)
  addModelWrapper () {
    this.output =
      `const ${this.name} = db.define('${this.name.toLowerCase()}', ` +
      this.output +
      ')\n'
  }

  // add instance methods
}

module.exports = Model
