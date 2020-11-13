const express = require("express")
const bodyParser = require("body-parser")
const ProductRoutes = require("./routes/product");

var app = express();
app.use(bodyParser.json());

app.use("/product", ProductRoutes)


app.listen(3000);
