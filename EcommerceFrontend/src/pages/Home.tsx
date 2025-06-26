import InfoCard from '../components/ProductCard'
import Carousel from '../components/Carousel'
import React from 'react'

const Home: React.FC =() => {
  return (
    <div className='min-h-screen w-screen bg-white flex flex-col items-center justify-start overflow-hidden'>
      <div className="pt-10">
        <Carousel />
        <InfoCard 
        image="https://picsum.photos/200/300"
        title="Flower"
        description="This is a image from lorem picsum" />
      </div>

    </div>
  )
}

export default Home
