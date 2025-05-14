const {connect} = require('./config/database.config')
const {sequelize} = require('./config/database.config')
const app = require('./app')
require('dotenv').config();
connect()

const PORT = process.env.APP_PORT || 3200


sequelize.sync().then(()=>{
    console.log('Tablas sincronizadas')
}).catch(error => 
    console.log("Error al sincronizar la base de datos", error)
)

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en el puerto  ${PORT}`)
})