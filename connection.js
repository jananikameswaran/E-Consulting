const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'e_consulting',
})
connection.connect(function (err) {
    if (err) {
        console.log(err)
    }
    else {
        console.log('Database Connected')
    }
})
module.exports = connection;



