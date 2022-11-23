const express= require('express')
const router=express.Router()
router.post("/get",(req,res)=>{
    res.send("inside rooms get")
})
router.post("/post",(req,res)=>{
    res.send("inside rooms post")
})
module.exports=router