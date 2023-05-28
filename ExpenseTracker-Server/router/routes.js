const express=require("express")
const postData=require("../controller/register")
const validateData=require("../controller/login")
const logoutData=require("../controller/logout")
const {addData, getData} = require("../controller/dashboard")
const updateData  = require('../controller/update')
const Router=express.Router()

Router.route("/").post(validateData)
Router.route('/logout').post(logoutData)
Router.route('/dashboard').post(addData).get(getData)
Router.route('/register').post(postData)
Router.route('/updateData').post(updateData);

module.exports=Router