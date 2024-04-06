import { useState } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup/Signup'
import Signin from './components/Signin/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Signup/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
