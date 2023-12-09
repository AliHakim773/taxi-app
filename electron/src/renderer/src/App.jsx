import './styles/index.css'

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
