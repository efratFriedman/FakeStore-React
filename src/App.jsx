import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StoreItems from './StoreItems'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StoreItems></StoreItems>
    </>
  )
}

export default App
