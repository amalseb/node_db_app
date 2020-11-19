const express = require("express");
const mysqlConnection = require("../connection");
const Router = express.Router();

var uni_update = `SELECT * FROM sam_unicent_db.product_un`;

Router.get("/",(req,res)=>{

    mysqlConnection.query(uni_update,
        (err, result)=>{
            if(!err){
                res.send(result)
            }
            else {
                console.log(err)
            }
        })    
})

module.exports = Router