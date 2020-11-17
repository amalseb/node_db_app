const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

var sql = `INSERT INTO 
sam_majento_db.product_maj 
SELECT * 
FROM sam_unicent_db.product_un un 
WHERE un.id NOT IN (
    SELECT maj.id FROM sam_majento_db.product_maj maj
    );
INSERT INTO 
sam_unicent_db.product_un 
SELECT * 
FROM sam_majento_db.product_maj maj 
WHERE maj.id NOT IN (
    SELECT un.id FROM sam_unicent_db.product_un un
    )`;

Router.get("/",(req,res)=>{
    mysqlConnection.query(sql,
    (err, rows, fields)=>{
        if(!err) {
            if(Object.keys(rows).length > 0) {
                res.send(rows);
            }
        }
        else {
            console.log(err)
        }
    })
})

module.exports = Router