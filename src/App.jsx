import { useState } from 'react'

import './App.css'
import AllRoutes from './Components/AllRoutes'
import Login from './Pages/Login/Login'
import { ToastContainer } from 'react-toastify'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <AllRoutes/>
    </>
  )
}

export default App
