const {DataTypes} = require("sequelize")
const {sequelize} = require("../config/database.config")

const Usuario = sequelize.define(
    "Usuario",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull:{
                    msg:  "El nombre del usuario no puede ser nulo"
                },
                notEmpty:{
                    msg: "El nombre del usuario no puede estar vacio"
                }
            }
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull:{
                    msg:  "La edad del usuario no puede ser nulo"
                },
                notEmpty:{
                    msg: "La edad del usuario no puede estar vacio"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "Correo electronico invalido"
                },
                notNull:{
                    msg:  "El correo electronico del usuario no puede ser nulo"
                },
                notEmpty:{
                    msg: "El correo electronico del  usuario no puede estar vacio"
                }
            }
        }
    },
    {
        tableName: 'usuario',
        timestamps: false
    }
)


module.exports = Usuario
