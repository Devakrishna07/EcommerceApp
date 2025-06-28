import React from 'react'
import Carousel from '../components/Carousel'

function Home() {

    const data = [
        {
            id: '1',
            src: 'https://picsum.photos/seed/picsum/800/200',
            alt: 'test data 1',
        },
        {
            id: '2',
            src: 'https://picsum.photos/id/237/800/300',
            alt: 'test data 2',
        },
        {
            id: '3',
            src: 'https://picsum.photos/800/300',
            alt: 'test-data-3',
        }
    ]

  return (
    <div className="w-screen min-h-screen text-8xl text-white bg-black flex flex-col items-center justify-start">
      <Carousel 
        slides={data}
      />
    </div>
  )
}

export default Home
