import { useDispatch, useSelector } from "react-redux"
import { extractUserSlice, setUser } from "../../core/redux/user/userSlice"
import { getMessages } from "../../core/axios"
import { useEffect, useState } from "react"

import './style.css'
import Message from "../message/message.component"
const MessagesContainer = () => {
  const dispatch = useDispatch()
  const userState = useSelector(extractUserSlice)
  const [messages, setMessages] = useState([])
  let timeout = 0, interval = 0
  useEffect(() => {
    async function fetchMessages() {
      try {
        const messages = await getMessages('getMessages', 'GET');
        setMessages(messages.messages)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMessages()
    clearInterval(interval)
    interval = setInterval(() => {
      fetchMessages()
    }, 5000)
  }, []);
  console.log(messages)
  return (
    <div className="messages-container">
      {
        messages.map(message => {
          return <Message key={message.id} userId={userState.user_id} message={message} />
        })
      }
    </div>
  )
}
export default MessagesContainer