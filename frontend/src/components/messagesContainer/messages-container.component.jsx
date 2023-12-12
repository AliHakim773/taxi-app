
import { getMessages } from "../../core/axios"
import { useEffect, useState } from "react"
import { extractMessagesSlice, setMessages } from "../../core/redux/messages/messagesSlice"
import { useDispatch, useSelector } from "react-redux"
import './style.css'
import Message from "../message/message.component"
const MessagesContainer = ({ userId }) => {
  let dispatch = useDispatch()
  const { allMessages } = useSelector(extractMessagesSlice)
  console.log('Component re rendered')
  let timeout = 0, interval = 0
  useEffect(() => {
    console.log('component mounted')
    async function fetchMessages() {
      try {
        const headers = { Authorization: localStorage.getItem('token') }
        // console.log(headers)
        const data = await getMessages('getUsersMessages', 'GET', null, headers);
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
  }, []);
  console.log(allMessages)
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