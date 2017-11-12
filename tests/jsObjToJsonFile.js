const { createConfigFile } = require('../api')

const testObj = {
  models: {
    users: {
      name: 'hello!!!!',
      defaultValue: 'string'
    }
  },
  options: {
    test: true
  }
}

console.log('attempting to output testObj')
createConfigFile('config.json', 'tests/output', testObj)
