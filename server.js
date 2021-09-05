const express = require("express")

const app =express();
app.use(express.static("public"))

// app.get('/',function(req,res){
//     res.send("hello world")
// })
 app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html")
})


    app.get('/home.html',function(req,res){
  
        res.sendFile(__dirname+"/home.html") 
    })


app.listen(3000,function(){
    console.log("server running")

});