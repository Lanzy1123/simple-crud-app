const exp = require("express");
const app = exp();
const cors = require("cors");
require("dotenv").config()

const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route.js");


//middleware
app.use(exp.static('public'));
app.use(exp.json());
app.use(exp.urlencoded({extended:false}));

//routes
app.use("/api/products",productRoutes);


const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
  console.log("connected to db")
  app.listen(PORT,'0.0.0.0',()=>{
        console.log(`Server @ ${PORT}`); }) 
     })
.catch(err => {console.log("connection failed",err.message)})        
