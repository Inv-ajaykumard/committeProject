const { json } = require('body-parser');
const express=require('express');
const { newhotles } = require('../controller/Hotels.js');
var router=express.Router()
const newhotlesc=require('../controller/Hotels');
const { verifyuser } = require('../utils/verifytoken.js');



router.post("/:id",verifyuser,newhotlesc.newhotlesc)
router.put("/:id",verifyuser,newhotlesc.updatehotel)
router.delete("/:id",verifyuser,newhotlesc.deletehotel)
router.get("/:id",verifyuser,newhotlesc.displayall)
module.exports=router;