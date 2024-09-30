import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import TextTool from './components/TextTool/TextTool'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />

      <TextTool />
    </div>
  )
}

export default App
