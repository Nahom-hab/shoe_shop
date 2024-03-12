const express = require('express')
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"));

app.listen(3000,()=>{
    console.log('listning to port 3000')
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.post('/',(req,res)=>{
   const fname=req.body.fname
   const lname=req.body.lname
   const email=req.body.email
   res.send('you have signed up succsusfully' +fname)
})



//list name 

//apikey
//370260887222ad4463e10a9e3887ddd9-us14