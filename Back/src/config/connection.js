const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql'
})

try {
  sequelize.authenticate()
  console.log('Conexão com banco de dados estabelecida!')
} catch (error) {
  console.log('Não foi possível conectar ao banco de dados')
}

module.exports = sequelize