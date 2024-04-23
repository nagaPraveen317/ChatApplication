const express=require('express')
const {chats}=require('./data')
const app=express()
const dotenv=require("dotenv")
dotenv.config()
app.get('/api/chats',(req,res)=>{
    //res.send("This is how api runs at the server")
    console.log(req)
    res.send(chats)
})

app.get('/api/chats/:id',(req,res)=>{
   /* const singlechat=chats.map((chat)=>{
        if (chat._id==req.params.id) return chat
    })*/
    /*const singlechat=chats.forEach((chat)=>{
        console.log("in the loop")
        if(chat._id==req.params.id) return chat;
    })*/

    const singlechat=chats.find((chat)=>{
        return chat._id==req.params.id;
    })
    res.send(singlechat)
})
const PORT=process.env.PORT
console.log("Value of port thorugh env variable: ",process.env.PORT)
app.listen(PORT,console.log("server is started")) 