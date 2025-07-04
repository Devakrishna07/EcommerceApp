import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TEXTS = ["Hello World", "Welcome to My Site", "Enjoy!", "React + Tailwind"];

function Hero({ Carousel }) {

  const images = [
  {
    id: 1,
    src: "https://picsum.photos/300/300?random=1",
    description: "Beautiful landscape with mountains."
  },
  {
    id: 2,
    src: "https://picsum.photos/300/300?random=2",
    description: "A serene lake view during sunset."
  },
  {
    id: 3,
    src: "https://picsum.photos/300/300?random=3",
    description: "City skyline with tall skyscrapers."
  },
  {
    id: 4,
    src: "https://picsum.photos/300/300?random=4",
    description: "A forest path surrounded by trees."
  },
  {
    id: 5,
    src: "https://picsum.photos/300/300?random=5",
    description: "Close up of colorful flowers."
  },
  {
    id: 6,
    src: "https://picsum.photos/300/300?random=6",
    description: "Beach with turquoise water and clear sky."
  },
  {
    id: 7,
    src: "https://picsum.photos/300/300?random=7",
    description: "Snow covered mountain peak."
  },
  {
    id: 8,
    src: "https://picsum.photos/300/300?random=8",
    description: "Historic architecture building."
  },
  {
    id: 9,
    src: "https://picsum.photos/300/300?random=9",
    description: "Green field under blue sky."
  },
  {
    id: 10,
    src: "https://picsum.photos/300/300?random=10",
    description: "Rustic wooden bridge over a stream."
  }
];


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      6000
    );
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="w-full h-[33vh] bg-blue-500 mt-2 rounded-xl flex justify-center items-center">
      <div className="hidden md:flex w-[60%] h-full flex items-center justify-center">
        <div className="text-center mt-10">
      <AnimatePresence>
        <motion.h1
          key={images.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1.5  }}
          className="text-4xl font-bold"
        >
          {images[index].description}
        </motion.h1>
      </AnimatePresence>
    </div>
      </div>

      <div className="w-full h-full md:w-[30%] md:h-[85%] rounded-md bg-blue-500 overflow-hidden">
        <div className="carousel rounded-box w-full h-full">
          {images.map((image) => (
            <div key={image.id} className="carousel-item w-1/2">
            <img
              src={image.src}
              className="w-full" />
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
