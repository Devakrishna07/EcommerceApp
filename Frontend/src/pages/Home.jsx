import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import CategoryGrid from '../components/CategoryGrid'
import LineText from '../components/LineText'
import Footer from '../components/Footer'


function Home() {
  const images = [
        { id: 1, src: "https://picsum.photos/300/300?random=1", description: "Beautiful landscape", category: "1" },
        { id: 2, src: "https://picsum.photos/300/300?random=2", description: "Serene lake", category: "1" },
        { id: 3, src: "https://picsum.photos/300/300?random=3", description: "City skyline", category: "1" },
        { id: 4, src: "https://picsum.photos/300/300?random=4", description: "Forest path", category: "1" },
        { id: 5, src: "https://picsum.photos/300/300?random=5", description: "Colorful flowers", category: "1" },
        { id: 6, src: "https://picsum.photos/300/300?random=6", description: "Beach view", category: "1" },
        { id: 7, src: "https://picsum.photos/300/300?random=7", description: "Snow mountain", category: "1" },
        { id: 8, src: "https://picsum.photos/300/300?random=8", description: "Historic building", category: "1" },
        { id: 9, src: "https://picsum.photos/300/300?random=9", description: "Green field", category: "1" },
        { id: 10, src: "https://picsum.photos/300/300?random=10", description: "Wooden bridge", category: "1" }
    ];
  return (
    <div className="w-screen min-h-screen bg-white overflow-hidden">
        <Navbar />
        <div className="w-full mt-18 overflow-x-hidden flex flex-col items-center justify-center">
          <Hero images={images} />
          <LineText />
          <CategoryGrid images={images} categoryName={"1"} />
        </div>
        <Footer />
    </div>
  )
}

export default Home
