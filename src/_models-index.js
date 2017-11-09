class Index {
  constructor (models) {
    this.models = models
    this.output = ''

    this.addImports()
    // this.addAssociations()
    this.addExports()
  }

  addImports () {
    this.models.forEach(model => {
      this.output += `const ${model.name} = require('./${model.name}')\n`
    })
  }

  addAssociations () {}

  addExports () {
    this.output += 'module.exports = {\n'
    this.models.forEach(model => {
      this.output += `  ${model.name},\n`
    })
    this.output += '}'
  }
}

module.exports = Index
