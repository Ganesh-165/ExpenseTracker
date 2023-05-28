const {collection}=require("../database/Schema")
const {usercollection}=require("../database/Schema")

const postData = async (req,res) =>{
    const { username, password, email } = req.body;
    try {
        const existingUser = await collection.findOne({ email });
        if (existingUser) {
            return res.status(200).json({success:false, message: 'Email Already Taken' });
        }
        const newUser = new collection({ username, email, password: password });
        await newUser.save();
        const user = new usercollection({email});
        await user.save();
        console.log("register Sucsessfull")
        res.json({success:true, message: 'Registration Successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({success:false, message: 'An error occurred' });
    }
}

module.exports=postData