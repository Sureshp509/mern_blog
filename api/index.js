const express=require("express");
const dotenv=require("dotenv");
dotenv.config();
const app=express();
app.use(express.json())
const authRoutes=require("./routes/auth.route");

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB)
.then(()=>console.log("db connected"))
.catch(err=>console.error("error",err));


app.use("/api/auth",authRoutes);

const PORT = process.env.PORT;
app.listen(PORT,()=>{console.log(`connected to port ${PORT}`)})



