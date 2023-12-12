import { useDispatch, useSelector } from "react-redux"
import { extractUserSlice, setUser } from "../../core/redux/user/userSlice"
import { getMessages } from "../../core/axios"
import { useEffect, useState } from "react"

import './style.css'
const MessagesContainer = () => {
  const dispatch = useDispatch()
  const userState = useSelector(extractUserSlice)
  const [messages, setMessages] = useState([])
  useEffect(() => {
    async function fetchMessages() {
      try {
        const messages = await getMessages('getMessages', 'GET');
        setMessages(messages)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMessages();
  }, []);
  console.log(messages)
  console.log(userState)
  return (
    <div className="messages-container">
    </div>
  )
}
export default MessagesContainer