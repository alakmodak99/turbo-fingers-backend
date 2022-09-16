const express = require("express");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv")
dotenv.config()

const User = require("../model/User.model");
const route = express.Router();

route.post("/", async (req, res)=>{
    try{
        const user = await User.findOne({email:req.body.email})
        var token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY);
        if(!user)
        {
            const resp = await User.create(req.body);
            res.status(201).send({error:false,message:"registered", token, data:resp})
        }
        else
        {
            res.status(200).send({error:false, message:"loggedin", token, data:user})
        } 
    }
    catch(err)
    {
        res.status(200).send({error:true, message:err})
    } 

})

route.get("/:id",async(req,res)=>{
    try{
      var decoded = jwt.verify(req.params.id, process.env.SECRET_KEY);
      return res.status(200).send({error:false,email:decoded.email})
    }catch(err){
      return res.status(400).send({error:true,message:err.message})
    }
  })

route.get("/", async (req, res)=>{
    const data = await User.find();
    res.status(200).send(data);
})
module.exports = route;