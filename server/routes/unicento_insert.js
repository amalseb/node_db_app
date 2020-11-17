const express = require("express");
const mysqlConnection = require("../connection");
const Router = express.Router();

var sql = `INSERT INTO sam_unicent_db.product_un (id,produt_name,stock) 
VALUES (?,?,?)`;

Router.post("/",(req,res)=>{

    const productId = req.body.productId
    const productName = req.body.productName
    const productStock = req.body.productStock
    mysqlConnection.query(sql,[productId,productName,productStock],
        (err, rows, fields)=>{
            if(!err){
                res.send("Values Inserted")
            }
        })
})

module.exports = Router