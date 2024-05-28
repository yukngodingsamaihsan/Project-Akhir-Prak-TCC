const mysql = require("mysql");

const dbConn = msql.createConnection({
    host: '34.101.47.79',
    user: 'root',
    password: '',
    database: 'data_buku_service'
});
dbConn.connect(function(err){
    if(err) throw errr;
    console.log("Database Connected");
});
module.exports = dbConn;