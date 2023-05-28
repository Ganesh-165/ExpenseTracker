const {usercollection} = require('../database/Schema');

const updateData = async (req,res)=>{
    let {email} = req.session;
    console.log(email)
    const {id,date,title,amount} = req.body;
    await usercollection.findOneAndUpdate({email:email,"data._id":id},{$set:{"data.$.date":date,"data.$.title":title,"data.$.amount":amount}}).then(()=>{
        res.json({success:true});
    }).catch((err)=>{
        console.log(err.message);
        res.json({success:false});
    })

}
module.exports = updateData