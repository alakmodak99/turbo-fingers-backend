const express = require("express")
const route = express.Router();
var jwt = require('jsonwebtoken');
const dotenv  = require("dotenv");
dotenv.config();

const User = require("../model/User.model")
const Score = require("../model/Scores.model")

route.post("/:token", async(req, res)=>{
    try{
        var decoded = jwt.verify(req.params.token, process.env.SECRET_KEY);
        console.log(decoded)
        if(decoded.error)
        {
            return res.status(400).send({error:true,message:"Invalid token"})
        }
        else
        {
            try{
                // const user = await User.findOne({email:decoded.email})
                const resp = await Score.create(req.body)
                return res.status(200).send({data:resp, error:false, message:"Record inserted"});
            }
            catch(err)
            {
                res.status(400).send({error:true, message:err.message})
            }
        }
      }catch(err){
        return res.status(400).send({error:true,message:err.message})
      }
})

route.get("/:token", async (req, res)=>{
    try{
        var decoded = jwt.verify(req.params.token, process.env.SECRET_KEY);
        var scores = await Score.find({user:decoded.id})
        return res.status(200).send({error:false, data:scores})
    }
    catch(e)
    {
        return res.status(400).send({error:true, message:e.message});
    }
})

module.exports = route;