import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import CategoryGrid from '../components/CategoryGrid'
import LineText from '../components/LineText'


function Home() {
  return (
    <div className="w-screen min-h-screen bg-white overflow-hidden">
        <Navbar />
        <div className="w-full mt-18 overflow-x-hidden flex flex-col items-center justify-center">
          <Hero />
          <LineText />
          <CategoryGrid />
        </div>
    </div>
  )
}

export default Home
