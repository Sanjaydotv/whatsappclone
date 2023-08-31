import { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Pusher from 'pusher-js'
import axios from './axios'

function App() {
  const [messages , setMessages] = useState([])

  useEffect(()=>{
    
      axios.get('/messages/sync')
      .then(res => {
        setMessages(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
    
    
  })
  

  useEffect(() =>{
    var pusher = new Pusher('b556c889973ddf6c9da1', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      // setMessages([...messages , data]);
      console.log(data);
    });

  } , [])

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar  />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
