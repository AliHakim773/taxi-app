import { useEffect, useState } from 'react';
import { postMessage, getMessages } from "../../core/axios"
import { extractMessagesSlice, setMessages } from "../../core/redux/messages/messagesSlice"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import './style.css'
const Input = ({ userId }) => {
  const { id } = useParams()
  let dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  function inputChange(e) {
    setInputValue(e.target.value)
  }
  async function createMessage() {
    try {
      console.log({ content: inputValue, receiverId: id, senderId: userId })
      const response = await postMessage(`createMessage`, 'POST', { content: inputValue, receiverId: id, senderId: 1 })
    } catch (error) {
      console.log(error)
    }
  }
  async function fetchMessages() {
    try {
      const headers = { Authorization: localStorage.getItem('token') }

      const data = await getMessages('getUsersMessages', 'POST', { receiverId: 6 }, headers);
      dispatch(setMessages({ allMessages: data['sorted messages'] }))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <input type="text" onChange={inputChange} value={inputValue} placeholder='Enter you message' />
      <div className="logo-holder">
        <button onClick={async () => {
          await createMessage()
          await fetchMessages()
          setInputValue('')
        }} >
          Send message
        </button>
      </div>
    </>
  )
}
export default Input;