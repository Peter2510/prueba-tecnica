const express = require('express');
const app = express();
const cors = require('cors')

//rutas

app.use(express.json())
app.use(express.urlencoded({extends:false}))
//app.use(cors({origin: process.env.ORIGIN}))

app.get('/', (req, res)=>{
    res.send('Server OK ')
})

module.exports = app