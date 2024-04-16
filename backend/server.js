const express=require('express')
const {chats}=require('./data')
const app=express()
app.get('/',(req,res)=>{
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
app.listen(5000,console.log("server is started")) 