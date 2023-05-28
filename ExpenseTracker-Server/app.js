const express=require("express")
const Router=require("./router/routes")
const bodyparser=require("body-parser")
const cors=require("cors")
const cookieParser = require("cookie-parser");
const session = require('express-session')
const connection = require('./database/Connection');
connection()
const app=express()
app.enable("trust proxy",1)
app.use(cors({origin:["http://localhost:3000"],credentials:true,methods:["POST","GET"]}))

app.use(
  session({
      key: "userId",
      secret: "subscribe",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 60 * 60 * 24,
      },
  })
);
app.use(cookieParser());
app.use(bodyparser.urlencoded({extended:false}),express.json())
app.use("/",Router)

app.listen(5000,()=>console.log("Sever started"))