const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
//const ProductRoutes = require("./routes/product");
//const MajentoRoutes = require("./routes/majento_insert")
const UnicentoRoutes = require("./routes/unicento_insert")

var app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//app.post("/majento_insert", MajentoRoutes);
app.use("/unicento_insert", UnicentoRoutes);
//app.use("/product", ProductRoutes);

app.listen(3030, () =>{
    console.log('port running')
});
