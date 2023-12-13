import { useDispatch, useSelector } from "react-redux"
import { extractUserSlice, setUser } from "../../core/redux/user/userSlice"
import Input from '../input'
import { useState, useEffect } from 'react'
import MessagesContainer from '../messagesContainer/messages-container.component'
import { useLocation } from 'react-router-dom'
import './style.css'
const Chat = () => {
  const dispatch = useDispatch()
  const userState = useSelector(extractUserSlice)
  const location = useLocation();
  const [receiver, setReceiver] = useState(3)
  useEffect(() => {
    if (location.pathname.includes('contact')) {
      setReceiver(1)
    } else {
      setReceiver(3)
    }
  }, [location.pathname])
  return (
    <div className="chat">
      <header>
        <div className="logo"></div>
        <div className="name">Nadim Rifaii</div>
      </header>
      <div className="holder">
        <MessagesContainer userId={userState.id} receiver={receiver} />
      </div>
      <div className="input-container">
        <Input userId={userState.id} receiver={receiver} />
      </div>
    </div>
  )
}
export default Chat