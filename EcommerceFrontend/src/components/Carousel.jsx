import React, { useEffect, useState } from 'react'

function Carousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            )
        }, 6500)

        return () => clearInterval(interval)
    }, [slides.length])

    return (
        <div className="w-[98vw] h-[33vh] bg-white rounded-xl mt-2 overflow-hidden relative">
            {slides.map((slide, index) => (
                <img
                    key={slide.id}
                    src={slide.src}
                    alt={slide.alt}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}
        </div>
    )
}

export default Carousel
