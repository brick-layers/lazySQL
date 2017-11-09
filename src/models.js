class Model {
  constructor (name, fields) {
    this.name = name
    this.filename = name + '.js'
    this.fields = fields
  }

  parse () {
    return JSON.stringify(this.fields, null, 2)
  }
}

module.exports = Model
