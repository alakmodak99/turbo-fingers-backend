const mongoose = require("mongoose")

const User = mongoose.Schema({
    email:{type:String, required:true},
    name:{type:String, required: true},
    image:{type:"String"} 
},
{
    versionkey:false,
    timestamps:true
})

module.exports = new mongoose.model("user", User);