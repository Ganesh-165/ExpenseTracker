const mongoose=require("mongoose")
const {collection}=require("../database/Schema")

const validateData= async(req,res)=>{
    try{
        const {email,password}=req.body
        const userdata=await collection.findOne({email:email}).exec();
        if(!userdata){
        return res.status(200).json({success:false, message:'Invalid User Name'})
        }
        if(userdata){
            if(userdata.password===password){
                req.session.email = email;
                res.json({success:true});
            }else{
                res.status(401).json({success:false , message:'Invalid Password'})
            }
        }
    }
    catch(error){
        console.log(error);
    }
}

module.exports=validateData