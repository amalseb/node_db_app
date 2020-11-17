const mysql = require("mysql")
var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "ics@2020",
    multipleStatements : true
})

mysqlConnection.connect((err)=>{
    if(!err) {
        console.log("Connected");
    }
    else {
        console.log("Failed")
    }
});

module.exports = mysqlConnection;