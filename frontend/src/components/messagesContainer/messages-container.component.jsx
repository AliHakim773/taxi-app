
import { getMessages } from "../../core/axios"
import { useEffect, useState } from "react"

import './style.css'
import Message from "../message/message.component"
const MessagesContainer = ({ userId }) => {

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
    }, 3000)
  }, []);
  return (
    <div className="messages-container">
      {
        messages.map(message => {
          return <Message key={message.id} userId={userId} message={message} />
        })
      }
    </div>
  )
}
export default MessagesContainer