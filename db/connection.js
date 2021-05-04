const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host:'localhost',
        //Your MySQL username
        user: 'root',
        password: '061483Love!',
        database: 'election'
    },
    console.log('Connected to the election database')
)

module.exports = db;