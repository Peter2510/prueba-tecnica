const {Sequelize} = require('sequelize')
require('dotenv').config()


const host = process.env.HOST
const port = process.env.PORT
const database = process.env.DATABASE_NAME
const user = process.env.DATABASE_USER
const password = process.env.DATABASE_PASSWORD

const sequelize = new Sequelize(database, user, password,{
    host: host,
    port: port,
    dialect: 'mysql',
    logging: false
})

async function connect() {

    try {
        await sequelize.authenticate();
        console.log('Conexion establecida');
    } catch (error) {
        console.log('Error en la conexion', error)
    }
    
}

module.exports = {connect, sequelize}