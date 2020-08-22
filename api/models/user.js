var mongoose = require("mongoose");
var UserSchema = mongoose.Schema({
    email:{
        type:String,
    },
    password:String,
    name:String
})
module.exports=mongoose.model("users",UserSchema)
