import React from 'react'
import Add from '../img/add.png'
import More from '../img/more.png'
import Messages from './Messages'
import InputMessage from './InputMessage'

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Sue</span>
        <div className="chatIcons">
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <InputMessage />
    </div>
  )
}

export default Chat
