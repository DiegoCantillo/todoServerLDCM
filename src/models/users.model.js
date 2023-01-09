// instancia para la coneccion db
const db = require('../utils/database');
//tipos de datos de sequelize varchar(SQL) --> STRING
const { DataTypes } = require('sequelize');

//definir el modelo de usuarios
// los modelos se definen con mayuscula

// parametros
// nombre de la tabla
// los atributos de las tablas (objeto)
const Users = db.define("users", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Users;