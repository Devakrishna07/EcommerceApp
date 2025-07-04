import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className="w-screen min-h-screen bg-white overflow-hidden">
        <Navbar />
        <div className="w-full mt-18"><Hero /></div>
    </div>
  )
}

export default Home
