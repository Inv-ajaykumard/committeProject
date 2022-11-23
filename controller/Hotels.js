const exp=require("express");
const Hotel = require("../models/Hotel");
exports.newhotlesc = (req, res) => {
    const hotelmodel = new Hotel(req.body);
    var data = req.body
    console.log(data);
    
    const savemodel = hotelmodel.save((error, data) => {
        if (error) {
            res.send("error")
        }
        else {
            res.send({ ":data": data })

        }
    });
}
exports.updatehotel= (req,res)=>{
    const updatemodel= Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},(error,data)=>{
            if(error){
                res.send("error")
            }
            else{
                res.send(data)

            }
        });
    
}
exports.deletehotel=(req,res)=>{
    Hotel.findByIdAndDelete(req.params.id,(error)=>{
        if(error){
            res.status(500).json(error)
        }
        else{
            res.status(200).send("deleteted successfully")
        }
    })
}
exports.displayall=(req,res)=>{
    Hotel.find((error,data)=>{
      if(error){
          res.status(500).json(error)
      }
      else{
          res.send({"data":data})
      }
    })
  
  }







