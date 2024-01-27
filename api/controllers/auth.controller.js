const User=require("../models/user.model");
const bcryptjs=require('bcryptjs');

const registerUser=async(req,res)=>{
try{
    const {username,email,password}=req.body;
    const hashedPass=bcryptjs.hashSync(password,10);
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Username, email, and password are required' });
      }
    const existingUser=await User.findOne({$or:[{username},{email}]});
    if(existingUser){
        res.status(402).json({ message: 'Username or email already exists' });
    }
    
    else{

        const newUser=new User({username,email,password:hashedPass})
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    }
} 
catch(error){
    console.error("Unable to register",error);
    res.status(500).json({message:"Internal Servor Error"})
}
}

module.exports={registerUser};