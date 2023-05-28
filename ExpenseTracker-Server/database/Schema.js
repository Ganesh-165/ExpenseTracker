const mongoose = require('mongoose');

const register = new  mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const task = new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
})
const userdata = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    data:[task]
})


const collection = mongoose.model('register',register);
const usercollection = mongoose.model('userdata',userdata)
module.exports = {collection:collection,usercollection:usercollection};