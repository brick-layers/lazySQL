const Model = require('./models')

function operator (data) {
  console.log('data', data)
  Object.keys(data).forEach(key => {
    const model = new Model(key, data[key])
    model.parse()
  })
}

module.exports = { operator, Model }
