import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { div } from 'framer-motion/client';

const TEXTS = ["Hello World", "Welcome to My Site", "Enjoy!", "React + Tailwind"];

function Hero({ images }) {


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
              transition={{ duration: 1.5 }}
              className="text-4xl font-bold"
            >
              {images[index].description}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      <div className="w-full h-full md:w-[30%] md:h-[85%] rounded-md bg-white overflow-hidden">
        <div className="carousel rounded-box w-full h-full">
          <div className="carousel-item w-full h-full ">
            <AnimatePresence>
              <motion.img 
              key={index}
              src={images[index].src}
              initial={{x:100, opacity: 0 }}
              animate={{x:0, opacity: 1 }}
              exit={{x:-100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full "
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
