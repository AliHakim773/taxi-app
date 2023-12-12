
import Input from '../input'
import MessagesContainer from '../messagesContainer/messages-container.component'
import './style.css'
const Chat = () => {
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

      </div>
    </div>
  )
}
export default Chat