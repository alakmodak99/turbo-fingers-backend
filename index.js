const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
const userController = require("./controllers/User.controller");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

app.use('/user', userController)

app.listen(PORT, async()=>{
    await connect();
    console.log("Server is running on PORT ", PORT);
})