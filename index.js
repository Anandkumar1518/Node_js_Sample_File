
const express = require("express");

const app=express();
const mongoose = require("mongoose");
//const morgan =require("morgan");
//app.use(morgan("dev"));
app.use(express.json());







// app.get("/",({},res)=>{
//     res.send("hellonp")
// })
//>>>Router<<<//
const infoRouter = require("./router");
app.use("/info",infoRouter);
app.use("/",(req,res)=>{
    res.json ("i m anand")
})

const port =5000;

app.listen(port,()=>{
    console.log("App is listening.. ")
})


// DB Connection//
mongoose.connect("mongodb://localhost:27017/sample_db",{
    useNewUrlParser:true,useUnifiedTopology:true} ,(err) => {
        
       if(!err) {
            console.log("DB Connected Successfully")
    }else{
        console.log("could not connect")
    }
})