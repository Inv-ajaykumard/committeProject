const { default: mongoose } = require('mongoose')
const moongoose=require('mongoose')
const { schema } = require('./Hotel')
const RoomSchema=new moongoose.Schema({
    title:{
        type:String,
        required:true,
      
    },
    price:{
        type:Number,
        required:true,
     
    },
    decription:{
        type:String,
        required:true
    },
    roomNumbers:[{number:Number,unavailableDates:[{type:Date}]}],
    isAdmin:{
        type:Boolean,
        default:false
    }
    
},{timestamps:true})
module.exports=mongoose.model("room",RoomSchema);