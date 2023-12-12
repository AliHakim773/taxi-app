import { useEffect, useState } from 'react';
import { ReactComponent as SendLogo } from '../../assets/svg/sendLogo.svg'
import './style.css'
const Input = () => {
  const [inputValue, setInputValue] = useState('')
  function inputChange(e) {
    setInputValue(e.target.value)
  }
  return (
    <>
      <input type="text" onChange={inputChange} value={inputValue} placeholder='Enter you message' />
      <div className="logo-holder">
        <button onClick={() => {
          console.log(inputValue)
          setInputValue('')
        }} >
          <SendLogo />
        </button>
      </div>
    </>
  )
}
export default Input;