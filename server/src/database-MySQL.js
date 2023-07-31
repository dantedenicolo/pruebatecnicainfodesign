var mysql = require('mysql');
require('dotenv').config();

const DB_PASSWORD = process.env.DB_PASSWORD;

//Configuración
var mysqlConn = mysql.createConnection({
  host: 'localhost',
  database: 'pruebainfodesign',
  user: 'root',
  password: DB_PASSWORD,
});

//Conexión
mysqlConn.connect( (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Conexión a DB MYSQL exitosa');
    }
});

//Exportación
module.exports = mysqlConn;