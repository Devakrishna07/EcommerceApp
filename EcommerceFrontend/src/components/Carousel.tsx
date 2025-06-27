import React, { useState, useEffect } from 'react'

interface Slide {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

interface CarouselProps {
  slides: Slide[]
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full mt-8 overflow-hidden">
      {/* Carousel wrapper */}
      <div className="relative h-56 sm:h-80 md:h-96 overflow-hidden">
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
              <h2 className="hidden md:block text-lg md:text-xl font-semibold">
                {slide.title}
              </h2>
              <p className="hidden md:block text-sm md:text-base">
                {slide.description}
              </p>
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
  )
}

export default Carousel
