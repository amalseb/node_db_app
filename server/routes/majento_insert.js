const express = require("express");
const mysqlConnection = require("../connection");
const Router = express.Router();


var sql = ``;

Router.get("/",(req,res)=>{
    mysqlConnection.query(sql,
        (err, rows, fields)=>{
            
        })
})

module.exports = Router