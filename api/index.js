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

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || "Internal Server Error";
    res.status(statusCode).json(
        {success:false,statusCode,message}
    )
    
})
const PORT = process.env.PORT;
app.listen(PORT,()=>{console.log(`connected to port ${PORT}`)})



