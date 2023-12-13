import { useEffect, useState } from "react";
import { getMessages } from "../../core/axios"
import { extractMessagesSlice, setMessages } from "../../core/redux/messages/messagesSlice"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from 'react-router-dom';
import './style.css'
import Message from "../message/message.component"
const MessagesContainer = ({ userId }) => {
  let location = useLocation()
  let [receiver, setReceiver] = useState(3)
  useEffect(() => {
    if (location.pathname.includes('contact')) {
      setReceiver(1)
    } else {
      setReceiver(3)
    }
  }, [location.pathname])
  let dispatch = useDispatch()
  const { allMessages } = useSelector(extractMessagesSlice)
  console.log('Component re rendered')
  let timeout = 0, interval = 0
  useEffect(() => {
    console.log('component mounted')
    async function fetchMessages() {
      try {
        const headers = { Authorization: localStorage.getItem('token') }
        console.log(receiver)
        const data = await getMessages('getUsersMessages', 'POST', { receiverId: receiver }, headers);
        dispatch(setMessages({ allMessages: data['sorted messages'] }))
      } catch (error) {
        console.log(error)
      }
    }
    fetchMessages()
    clearInterval(interval)
    interval = setInterval(() => {
      fetchMessages()
    }, 3000)
  }, [receiver]);
  return (
    <div className="messages-container">
      {
        allMessages.map(message => {
          return <Message key={message.id} userId={userId} message={message} />
        })
      }
    </div>
  )
}
export default MessagesContainer