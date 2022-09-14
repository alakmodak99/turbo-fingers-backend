const express = require("express");
const route = express.Router();

const db = require("../configs/firebase");
// const firestore = firebase.firestore();

route.get("/", async(req, res)=>{
    const snapshot = await db.collection("User").get();
    const list = snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}));
    res.send(list);
})

route.post("/", async(req, res)=>{
    const data = await db.collection("User").add(req.body);
    res.send({msg:"Added", response:data});
})

module.exports = route;