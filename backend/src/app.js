const express = require('express');
const app = express();
const cors = require('cors')

//rutas
const clienteRoutes = require('./routes/usuario.routes.js')

app.use(express.json())
app.use(express.urlencoded({extends:false}))
//app.use(cors({origin: process.env.ORIGIN}))


app.use(clienteRoutes)
app.get('/', (req, res)=>{
    res.send('Server OK ')
})

module.exports = app