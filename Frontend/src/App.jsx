import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
