import { useEffect, useState } from 'react';
import { postMessage } from "../../core/axios"
import { ReactComponent as SendLogo } from '../../assets/svg/sendLogo.svg'
import './style.css'
const Input = ({ userId }) => {
  const [inputValue, setInputValue] = useState('')
  function inputChange(e) {
    setInputValue(e.target.value)
  }
  async function createMessage() {
    try {
      console.log({ content: inputValue, chatRoomId: 3, userId })
      const response = await postMessage(`createMessage`, 'POST', { content: inputValue, chatRoomId: 3, userId })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <input type="text" onChange={inputChange} value={inputValue} placeholder='Enter you message' />
      <div className="logo-holder">
        <button onClick={() => {
          console.log(inputValue)
          createMessage()
          setInputValue('')
        }} >
          <SendLogo />
        </button>
      </div>
    </>
  )
}
export default Input;