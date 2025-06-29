import React from 'react'
import Carousel from '../components/Carousel'
import NavBar from '../components/NavBar'
import Tab from 'daisyui/components/tab'
import FilterTabs from '../components/Tabs'
import CategoryGrid from '../components/CategoryGrid'

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
    <div className="w-screen min-h-screen text-8xl text-white bg-white flex flex-col items-center justify-start">
      <NavBar />
      <Carousel 
        slides={data}
      />
      <CategoryGrid />
    </div>
  )
}

export default Home
