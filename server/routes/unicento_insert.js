const express = require("express");
const mysqlConnection = require("../connection");
const Router = express.Router();

var uni_insert = `INSERT INTO sam_unicent_db.product_un (id,product_name,stock) 
VALUES (?,?,?);
INSERT INTO 
sam_majento_db.product_maj 
SELECT * 
FROM sam_unicent_db.product_un un 
WHERE un.id NOT IN (
    SELECT maj.id FROM sam_majento_db.product_maj maj
    );`;

Router.post("/",(req,res)=>{

    const productId = req.body.productId
    const productName = req.body.productName
    const productStock = req.body.productStock
    mysqlConnection.query(uni_insert,[productId,productName,productStock],
        (err, rows, fields)=>{
            if(!err){
                res.send("Values Inserted")
            }
            else {
                console.log(err)
            }
        })    
})

module.exports = Router