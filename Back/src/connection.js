const mysql = require('mysql2/promise') //importação do mysql
//criar um pool de conexões com o banco de dados 
const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: '', //colocar o nome do banco de dados aqui  
})

module.exports = connection