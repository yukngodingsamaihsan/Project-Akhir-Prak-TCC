const mysql = require("mysql");

const dbConn = mysql.createConnection({
    host: '34.101.47.79',
    user: 'root',
    password: '',
    database: 'data-buku-db'
});

dbConn.connect(function(err) {
    if (err) {
        console.error('Error connecting to MySQL server:', err);
        return;
    }
    console.log("Database Connected");
});

module.exports = dbConn;
