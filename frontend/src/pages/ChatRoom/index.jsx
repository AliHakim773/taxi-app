import NavBar from "../../components/common/NavBar"
import Footer from "../../components/common/Footer"
import SideBar from "../../components/siebar"
// css imports
import './style.css'
const ChatRoom = () => {
  return (
    <div className='page chat-room'>
      <NavBar />
      <main>
        <SideBar />
      </main>
      <Footer />
    </div>
  )
}
export default ChatRoom