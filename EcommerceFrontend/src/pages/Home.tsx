import Carousel from '../components/Carousel'
import React from 'react'

const Home: React.FC =() => {
  return (
    <div className='min-h-screen w-screen bg-white flex flex-col items-center justify-start overflow-hidden'>
      <div className="pt-10">
        <Carousel />
      </div>

    </div>
  )
}

export default Home
