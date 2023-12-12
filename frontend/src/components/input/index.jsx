import { useEffect, useState } from 'react';
import { postMessage, getMessages } from "../../core/axios"
import { ReactComponent as SendLogo } from '../../assets/svg/sendLogo.svg'
import { extractMessagesSlice, setMessages } from "../../core/redux/messages/messagesSlice"
import { useDispatch, useSelector } from "react-redux"
import './style.css'
const Input = ({ userId }) => {
  let dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  function inputChange(e) {
    setInputValue(e.target.value)
  }
  async function createMessage() {
    try {
      const response = await postMessage(`createMessage`, 'POST', { content: inputValue, chatRoomId: 3, userId })
    } catch (error) {
      console.log(error)
    }
  }
  async function fetchMessages() {
    try {
      const data = await getMessages('getMessages', 'GET');
      dispatch(setMessages({ allMessages: data.messages }))
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
          <SendLogo />
        </button>
      </div>
    </>
  )
}
export default Input;