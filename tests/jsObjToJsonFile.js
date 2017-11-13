// const { createConfigFile } = require('../api')

// const testObj = {
//   models: {
//     users: {
//       name: 'hello!!!!',
//       defaultValue: 'string'
//     }
//   },
//   options: {
//     test: true
//   }
// }

// console.log('attempting to output testObj')
// createConfigFile('config.json', 'tests/output', testObj)

const fs = require('fs')
const { api } = require('../api')

// const file = fs.readFileSync('testbad.json')

api('./tests/testbad.json', 'tests/output/')
