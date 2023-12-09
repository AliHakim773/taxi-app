import Versions from './components/Versions'
import icons from './assets/icons.svg'
import { useEffect, useState } from 'react'

function App() {
  const [nb, setNb] = useState(0)
  const click = () => {
    setNb((prev) => {
      return prev + 1
    })
  }

  return (
    <div>
      meshe l electron ma3 react yaaay <br />
      <button onClick={click}>Thimbs Up count</button>
      <div>{nb}</div>
    </div>
  )
}

export default App
