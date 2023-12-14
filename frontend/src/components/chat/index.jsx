import { useDispatch, useSelector } from "react-redux"
import { extractUserSlice, setUser } from "../../core/redux/user/userSlice"
import Input from '../input'
import { useState, useEffect } from 'react'
import MessagesContainer from '../messagesContainer/messages-container.component'
import { useParams } from 'react-router-dom'
import './style.css'
const Chat = () => {
  const dispatch = useDispatch()
  const userState = useSelector(extractUserSlice)
  const { id } = useParams()
  console.log(userState.id, id)
  return (
    <div className="chat">
      <header>
        <div className="logo"></div>
        <div className="name">Nadim Rifaii</div>
      </header>
      <div className="holder">
        <MessagesContainer receiverId={id} userId={userState.id} />
      </div>
      <div className="input-container">
        <Input receiverId={id} userId={userState.id} />
      </div>
    </div>
  )
}
export default Chat