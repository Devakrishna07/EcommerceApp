import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../routes/api';

function Hero() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchCarousel = async () => {
    try {
      const response = await api.get('/Homepage/carousel/');
      console.log('Clothes data:', response.data);
      const formatted = response.data.map(item => ({
        description: item.description,
        src: item.image_url,
      }));
      setImages(formatted);
    } catch (error) {
      console.error('Error fetching clothes:', error);
    }
  };

  useEffect(() => {
    fetchCarousel();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const intervalId = setInterval(
        () => setIndex((prev) => (prev + 1) % images.length),
        6000
      );
      return () => clearInterval(intervalId);
    }
  }, [images]);

  if (images.length === 0) {
    return <div className="w-full h-[33vh] flex items-center justify-center bg-gray-200 rounded-xl mt-2">
      Loading carousel...
    </div>;
  }

  return (
    <div className="w-full h-[33vh] bg-blue-500 mt-2 rounded-xl flex justify-center items-center">
      <div className="hidden md:flex w-[60%] h-full items-center justify-center">
        <div className="text-center mt-10">
          <AnimatePresence>
            <motion.h1
              key={index}
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
          <div className="carousel-item w-full h-full">
            <AnimatePresence>
              <motion.img
                key={index}
                src={images[index].src}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
