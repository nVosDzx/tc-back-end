var express= require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
var router=require("./api/routes");

mongoose.connect('mongodb://localhost:27017/tc',(err)=>console.log(err))
app.use("/users",router);


app.get("/",(req,res)=>{
    res.send({message:"hello "})
})
app.listen(3000,()=>console.log("server is running"))