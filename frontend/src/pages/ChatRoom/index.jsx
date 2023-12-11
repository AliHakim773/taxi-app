import NavBar from "../../components/common/NavBar"
import Footer from "../../components/common/Footer"
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
      <Footer />
    </div>
  )
}
export default ChatRoom