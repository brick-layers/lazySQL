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
    associations.forEach(association => {
      const source = Object.keys(association)[0]
      const type = Object.keys(association[source])[0]
      const target = Object.keys(association[source][type])[0]
      const option = association[source][type][target]

      const options = option ? ', ' + JSON.stringify(option) : ''
      const line = `${source}.${type}(${target}${options})\n`

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
