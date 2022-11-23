const express =require("express");
const router = express.Router();
const InfoRouter = require("./infoSchema");
// router.get("/",(req,res)=>{
//     res.send ("router file")
// })
// Created
router.post("/anand",async(req,res)=>{
    // console.log(req.body);
    var data = new InfoRouter({
        Name:req.body.Name,
        UserName:req.body.UserName,
        Email:req.body.Email
    })
   await data.save()
   res.status(200).json({
    success:true,
    status:200,
    data
   });
})
// get Method
router.get("/getall",async(req,res)=>{
    try{
        var findData = await InfoRouter.find();
        res.status(200).json({
            success:true,
            message:"fetched successfully..",
            findData
        });
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Error :"+ err
        
        });
    }
    
})
router.get("/",(req,res)=>{
    res.json("i am a router file");
})

module.exports=router;