import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TEXTS = ["Hello World", "Welcome to My Site", "Enjoy!", "React + Tailwind"];

function Hero({ Carousel }) {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => (index + 1) % TEXTS.length),
      6000
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-[33vh] bg-blue-500 mt-2 rounded-xl flex justify-center items-center">
      <div className="hidden md:flex w-[60%] h-full flex items-center justify-center">
        <div className="text-center mt-10">
      <AnimatePresence>
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1.5  }}
          className="text-4xl font-bold"
        >
          {TEXTS[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
      </div>

      <div className="w-full h-full md:w-[30%] md:h-[85%] rounded-md bg-blue-500 overflow-hidden">
        <div className="carousel rounded-box w-full h-full">
          <div className="carousel-item w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              className="w-full" />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              className="w-full" />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              className="w-full" />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              className="w-full" />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              className="w-full" />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              className="w-full" />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
