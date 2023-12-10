import './styles/index.css'
import SignIn from './pages/SignIn'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
