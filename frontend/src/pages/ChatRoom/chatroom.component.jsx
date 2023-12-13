import NavBar from "../../components/common/NavBar"
import SideBar from "../../components/siebar"
import Chat from "../../components/chat/"
import { useDispatch, useSelector } from "react-redux"
import { extractUserSlice, setUser } from "../../core/redux/user/userSlice"
// css imports
import './style.css'
const ChatRoom = () => {
  console.log('Hello from normal chatroom')
  const dispatch = useDispatch()
  const userState = useSelector(extractUserSlice)
  return (
    <div className='page chat-room'>
      <NavBar />
      <main>
        <SideBar />
        <Chat receiverId={3} userId={userState.id} />
      </main>
    </div>
  )
}
export default ChatRoom