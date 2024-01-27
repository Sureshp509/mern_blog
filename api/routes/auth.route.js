const express=require("express")

const Auth=require("../controllers/auth.controller")

const router=express.Router();

router.post("/register",Auth.registerUser);

module.exports=router;