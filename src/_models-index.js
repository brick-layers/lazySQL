class Index {
  constructor (models, associations) {
    this.models = models
    this.output = ''

    // magic
    this.addImports()
    this.addAssociations(associations)
    this.addExports()
  }

  addImports () {
    this.models.forEach(model => {
      this.output += `const ${model.name} = require('./${model.name}')\n`
    })
    this.output += '\n'
  }

  addAssociations (associations) {
    console.log(associations)
    Object.keys(associations).forEach(key => {
      const line = `${'key'}${'associations[key]'}\n`
      this.output += line
      console.log(key)
    })
  }

  addExports () {
    this.output += 'module.exports = {\n'
    this.models.forEach(model => {
      this.output += `  ${model.name},\n`
    })
    this.output += '}'
  }
}

module.exports = Index
