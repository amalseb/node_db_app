const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
//const ProductRoutes = require("./routes/product");
//const MajentoRoutes = require("./routes/majento_insert")
const UnicentoInsertRoutes = require("./routes/unicento_insert")
const UnicentoUpdateRoutes = require("./routes/unicento_update")

var app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//app.use("/majento_insert", MajentoRoutes);
app.use("/unicento_insert", UnicentoInsertRoutes);
app.use("/unicento_update", UnicentoUpdateRoutes);
//app.use("/product", ProductRoutes);

app.listen(3030, () =>{
    console.log('port running')
});
