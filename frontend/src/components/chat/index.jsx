
import Input from '../input'
import MessagesContainer from '../messagesContainer'
import { ReactComponent as SendLogo } from '../../assets/svg/sendLogo.svg'
import './style.css'
const Chat = ({ messages, roleId }) => {
  return (
    <div className="chat">
      <header>
        <div className="logo"></div>
        <div className="name">Nadim Rifaii</div>
      </header>
      <div className="holder">
        <MessagesContainer />
      </div>
      <div className="input-container">
        <Input />
        <div className="logo-holder">
          <SendLogo />
        </div>
      </div>
    </div>
  )
}
export default Chat