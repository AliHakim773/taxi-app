import NavBar from "../../components/common/NavBar"
import SideBar from "../../components/siebar"
import Chat from "../../components/chat"
// css imports
import './style.css'
const ChatRoom = () => {
  return (
    <div className='page chat-room'>
      <NavBar />
      <main>
        <SideBar />
        <Chat />
      </main>
    </div>
  )
}
export default ChatRoom