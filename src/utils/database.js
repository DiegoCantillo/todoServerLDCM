const { Sequelize } = require('sequelize');


//crear una instancia con parametros de configuracion de nuestra base de datos
// le pasamos un objeto de configuracion que son las credenciales de mi base de datos
const db = new Sequelize({
    database: "todoapp",
    username: "postgres",
    host: "localhost", // tambn podemos poner 127.0.0.1 que es lo mismo
    port: "5432",
    password: "ruut",
    dialect: "postgres" // esto define la base de datos que estamos usando
});

module.exports = db;

