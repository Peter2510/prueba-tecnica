const Usuario = require('../models/Usuario.js')
const { sequelize } = require('../config/database.config')


const registrarCliente = async (req, res) => {


    const t = await sequelize.transaction();

    try {

        //se obtienen los parametros del cliente a registrar
        const { nombre, edad, email } = req.body;

        //validacion de edad positiva
        if(edad<=0){
           return res.json({ok: false, msj: "La edad debe ser positiva"})
        }

        //se registra el cliente
        const usuarioEntity = await Usuario.create({
            nombre,
            edad,
            email
        },
            { transaction: t }
        );

        usuarioEntity.save()

        await t.commit()

        res.json({ok: true, msj: 'Cliente creado exitosamente'})

    } catch (error) {
        res.json({ok: false, msj: error})
    }


}

const obtenerClientes = async (req, res) => {


    try {

        const usuarios = await Usuario.findAll();

        res.json({ok: true, usuarios})

    } catch (error) {
        res.json({ok: false, msj: error})
    }


}

module.exports = {
    registrarCliente,
    obtenerClientes
}