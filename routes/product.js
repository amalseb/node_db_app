const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

un_id = []
maj_id = []

var sql = "SELECT id from sam_unicent_db.product un;SELECT id from sam_majento_db.product_maj maj";

Router.get("/",(req,res)=>{
    mysqlConnection.query(sql,
    (err, rows, fields)=>{
        if(!err) {
            res.send(rows);
            //console.log(rows)
            //un_id = Object.keys(row)
        }
        else {
            console.log(err)
        }
    })
})

module.exports = Router