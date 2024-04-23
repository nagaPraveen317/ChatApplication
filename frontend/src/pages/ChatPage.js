import axios from 'axios'
import { useEffect, useState } from 'react';

const ChatPage=()=>{
    const [chatdata,setChatdata]=useState([])

    const fetchChats=async()=>{
        const data=await axios.get('/api/chats');
        console.log(data.data)
        setChatdata(data.data)
    }
    useEffect(()=>{
        fetchChats();
    },[]);
    return(
        <div>{chatdata.map((chat)=>{
            return(<div key={chat._id}>{chat.chatName}</div>)
        })}</div>
    )
}
export default ChatPage