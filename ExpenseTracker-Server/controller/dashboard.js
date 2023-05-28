const {usercollection,collection} = require('../database/Schema')


const getData = async(req,res)=>{
    const {email} = req.session
    console.log(email)
    const userData = await usercollection.findOne({email:email}).exec();
    const name = await collection.findOne({email:email}).exec();
    console.log(name.username)
    res.json({userData:userData,username:name.username});
}
const addData = async(req,res)=>{
    const {email} = req.session
    console.log(email);
    const {date,title,amount} = req.body;
    await usercollection.updateOne({email:email},{$push:{data:{date:date,title:title,amount:amount}}})
    .then(()=>{
        console.log("Data Added Successfully");
        res.json({success:true,message:'data Added'});
    })
    .catch((err)=>{
        console.log(err.message);
        res.json({success:false,message:"Error"});
    })
}
module.exports={addData,getData}
