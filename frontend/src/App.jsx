import { useState } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup/Signup'
import Signin from './components/Signin/Signin'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home/Home'
import PlaylistsContainer from './components/Home/Main/PlaylistsContainer'
import Playlist from './components/Home/Main/Playlist'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}>
            <Route path='' element={<PlaylistsContainer/>} />
            <Route path=':playlistid' element={<Playlist/>} />
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
