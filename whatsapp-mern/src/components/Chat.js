import React, { useState } from 'react'
import "../css/Chat.css"
import { Avatar, IconButton } from '@mui/material'
import { SearchOutlined } from '@mui/icons-material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from '../axios';

function Chat({messages}) {

    const [ input , setInput ] = useState('')
    const sendMessage = async (e)=>{
        e.preventDefault();
        try{
            await axios.post('/messages/new',{
                message: input,
                name:'sanjay',
                time:"beta time",
                received:false
            })
        } catch(error){
            console.error("err")
        }

        
    setInput('')
    }

  return (
    <div className='Chat'>
        <div className="chat__header">
            <IconButton>
                <Avatar />
            </IconButton>
            <div className="chat__info">
                <h3>Name</h3>
                <p>last seen</p>
            </div>

            <div className='chat__headerRight'>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>

        <div className="chat__body">
            {messages.map( msg => {
                return <p className={`chat__recieved ${!msg.received && 'chat__message'} `} key={msg.id}>
                <span className='chat__name'>
                    {msg.name}
                </span>
                {msg.message}
                <span className='chat__time'>
                    {msg.time}
                </span>
            </p>
            })}
            
        </div>

        <div className="chat__footer">
            <InsertEmoticonIcon />
            <form> 
                <input placeholder='type a message' type='text' value={input} onChange={(e)=>{
                    setInput(e.target.value)
                }}/>
                <button type='submit' onClick={sendMessage}>Send a message</button>
            </form>
            <MicIcon />
        </div>
    </div>
  )
}

export default Chat