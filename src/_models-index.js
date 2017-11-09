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
    Object.keys(associations).forEach(key => {
      const type = Object.keys(associations[key])[0]
      const targetObj = associations[key][type]
      const target = Object.keys(targetObj)[0]
      const options = targetObj[target]
        ? ', ' + JSON.stringify(targetObj[target])
        : ''

      const line = `${key}.${type}(${target}${options})\n`

      this.output += line
    })
    this.output += '\n'
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
