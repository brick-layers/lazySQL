class Model {
  constructor (name, fields) {
    this.name = name
    this.fields = fields
  }

  parse () {
    console.log(this.name)
  }
}

module.exports = Model
