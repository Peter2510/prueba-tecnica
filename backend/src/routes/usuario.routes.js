const express = require('express')
const usuarioControler = require('../controllers/usuario.controller')
const router = express.Router()

const api = '/api/v1/usuarios';

router.get(`${api}`,usuarioControler.obtenerClientes)
router.post(`${api}`,usuarioControler.registrarCliente)

module.exports = router