var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
        host: 'localhost',
        user : 'root',
        password : '',
        database: 'clientes',
        port : 3306
    });
}

module.exports = function(){
    return createDBConnection;
}