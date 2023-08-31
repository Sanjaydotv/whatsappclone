import React from 'react'
import "../css/Sidebar.css"
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='Sidebar'>
        
        <div className="Sidebar__header">
            <IconButton >
            <Avatar src="https://placekitten.com/201/200" />
            </IconButton>
            <div className="Siderbar__headerRight">
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>

        <div className='Sidebar__search'>
            <div className='Sidebar__searchContainer'>
                <SearchOutlined />
                <input placeholder="enter name or start new chat" type='text' />
            </div>
        </div>

        <div className='Sidebar__chats'>
            <SidebarChat /> 
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
    
  )
}

export default Sidebar