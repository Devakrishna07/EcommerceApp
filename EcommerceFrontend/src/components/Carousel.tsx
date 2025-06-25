import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Casual Cotton Shirt',
    title: 'Casual Cotton Shirt',
    description: 'Comfortable everyday wear made with breathable fabric.',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Stylish Winter Jacket',
    title: 'Stylish Winter Jacket',
    description: 'Stay warm and fashionable during chilly days.',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Classic Denim Jeans',
    title: 'Classic Denim Jeans',
    description: 'Timeless denim jeans that never go out of style.',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/6311571/pexels-photo-6311571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Floral Summer Dress',
    title: 'Floral Summer Dress',
    description: 'Lightweight and colorful dress perfect for summer.',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/6311397/pexels-photo-6311397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Formal Suit Set',
    title: 'Formal Suit Set',
    description: 'Elegant and tailored suit for special occasions.',
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[80dvw] md:max-w-6xl mx-auto mt-10">
      {/* Carousel wrapper */}
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-white">
              <h2 className="hidden md:block text-lg md:text-xl font-semibold">{slide.title}</h2>
              <p className="hidden md:block text-sm md:text-base">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 -translate-x-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          ></button>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1 1 5l4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 9 4-4-4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
