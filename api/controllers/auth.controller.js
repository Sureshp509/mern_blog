const { errorHandler } = require("../utils/error");
const User=require("../models/user.model");
const bcryptjs=require('bcryptjs');

const registerUser=async(req,res,next)=>{
try{
    const {username,email,password}=req.body;
    const hashedPass=bcryptjs.hashSync(password,10);
    if (!username || !email || !password) {
        next(errorHandler(400,"All fields are required"))
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
   next(error)
}
}

module.exports={registerUser};