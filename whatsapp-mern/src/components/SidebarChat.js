import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import "../css/SidebarChat.css"

function SidebarChat() {
  return (
    <div className='Sidebar__Chat'>
      <IconButton>
        <Avatar />
      </IconButton>
      <div className='Sidebar__Chatinfo'>
        <h2>name</h2>
        <p>this is last message</p>
      </div>
    </div>
  )
}

export default SidebarChat