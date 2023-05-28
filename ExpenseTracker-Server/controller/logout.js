const mongoose=require("mongoose")

const logoutData= async(req,res)=>{
    try{
        req.session.destroy();
        res.header("Cache-Control","private,no-cache,no-store,must-revalidate")
        res.header("Expires","1")
        res.header("Pragma","no-cache")
        return res.json({ message: 'Logout successful' });
    }
    catch(error){
        console.log(error);
    }
}

module.exports=logoutData