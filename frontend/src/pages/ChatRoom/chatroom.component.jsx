import NavBar from "../../components/common/NavBar"
import SideBar from "../../components/siebar"
import Chat from "../../components/chat/"
import { useDispatch, useSelector } from "react-redux"
import { extractUserSlice, setUser } from "../../core/redux/user/userSlice"
import { getMessages } from "../../core/axios"
import { useEffect, useState } from "react"
// css imports
import './style.css'
const ChatRoom = () => {
  const dispatch = useDispatch()
  const userState = useSelector(extractUserSlice)
  const [messages, setMessages] = useState([])
  useEffect(() => {
    async function fetchMessages() {
      try {
        const messages = await getMessages('getMessages', 'GET');
        console.log(messages)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMessages();
  }, []);
  return (
    <div className='page chat-room'>
      <NavBar />
      <main>
        <SideBar />
        <Chat messages={messages} roleId={userState.role_id} />
      </main>
    </div>
  )
}
export default ChatRoom