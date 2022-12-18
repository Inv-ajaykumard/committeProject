const exp = require('express')
const app = exp()
const fileupload=require('express-fileupload')

app.use(fileupload())
const AWS = require('aws-sdk');
exports.image=(req,res)=>{
    console.log(req.files.data.data)
    res.send(req.files.data.data)
     AWS.config.update({
         accessKeyId: "AKIA2MJLARW2KSSYD6HQ",
        secretAccessKey: "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",
        region: 'us-east-1'
       });
  
       var s3 = new AWS.S3();
       const filecontent=Buffer.from(req.files.data.data,'binary')
       var params = {
       Bucket: 'awstrialbucket008',
         Body : filecontent,
         Key :req.files.data.name
       };
       s3.upload(params,(err,data)=>{
         if ( err){
           res.send("error")
         }
        else{
           res.send("image uploaded")
        }
     
     })
 
}