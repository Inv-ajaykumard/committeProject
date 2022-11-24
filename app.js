
const exp = require('express')
const mongoose = require('mongoose')
const bdyp = require('body-parser')
const { urlencoded } = require('body-parser')
const app = exp()
const gamepointtable=require("./models/GamePointTable.js");
const authroute=require('./routes/auth.js')
const chatroute=require('./routes/chat.js')
const hotelroute=require('./routes/hotels.js')
const userroute=require('./routes/user.js')
const roomroute=require('./routes/rooms.js')
const msgroute=require('./routes/messages.js')

app.use(urlencoded({ extended: true }))
app.use(bdyp.json())

const connect=async ()=>{
    try{

        
        await mongoose.connect("mongodb+srv://ajay1600:ajaykumard@cluster0.wpagudr.mongodb.net/newdb", { useNewUrlParser: true }, (err, db) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Connected to mongoDB");
            }
        });
    }
    catch(error){
        throw error;
    
    }
}
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});


mongoose.connection.on("disconnected",()=>{
    console.log("disconnected")
})
mongoose.connection.on("connected",()=>{
    console.log("connected")
})


app.get("/api/view",(req,res)=>{
    res.send("in get api")
    
})
app.post("/group/create",(req,res)=>{

    // const groups = new createGroup({
    //     GroupId: req.body.GroupName, GroupImage: "./assets/img1.png" ,GroupType: req.body.GroupType
    // })

    // const groups = new posts({
    //     UserId: req.body.UserId,PostImage:"./assets/img2.png",Tags:req.body.Tags
    //  })
const groups = new gamepointtable(req.body)
groups.save((error,data)=>{
    if(error){
        res.send(error)
    }
    else{
        res.send(data)
    }
})

})
//middle

app.use("/auth",authroute);
app.use("/users",userroute);
app.use("/hotels",hotelroute);
app.use("/rooms",roomroute);
app.use("/chats",chatroute);
app.use("/messages",msgroute);









app.listen(4008,()=>{
    connect();
    console.log("port is running")
})