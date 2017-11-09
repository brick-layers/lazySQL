const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  "fieldA": {
    "type": "string"
  },
  "fieldB": {
    "type": "Sequelize.STRING"
  }
})

module.exports = { Product }
