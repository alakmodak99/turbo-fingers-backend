const mongoose = require("mongoose")
// const dotenv = require("dotenv")
// dotenv.config();

module.exports = () =>{
    mongoose.connect('mongodb+srv://tazammul:turbo-fingers@cluster0.lhn5xru.mongodb.net/turbo-fingers?retryWrites=true&w=majority')
    
}