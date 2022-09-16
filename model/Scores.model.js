const mongoose = require("mongoose")

const Score = mongoose.Schema({
    speed : {type:Number, required:true},
    accuracy : {type:String, required:true},
    totalWords : {type:Number, required:true},
    totalChars : {type:Number, required:true},
    totalWrongChars : {type:Number, required:true},
    freqOfWrongChars : {type:Object, default : {}},
    level : {type:String, required:true},
    category : {type:String, required:true},
    paragraph : {type:String, required:true},
    user : {type:mongoose.Types.ObjectId, ref:"user"}
},{
    timestamps:true,
    versionkey:false
}) 

module.exports = new mongoose.model("score", Score)