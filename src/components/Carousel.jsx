import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './Carousel.css'

const Carousel = ({ images, height = '400px' }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    if (!images || images.length === 0) return null

    return (
        <div className="carousel-container" style={{ height }}>
            <div
                className="carousel-slide"
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
            ></div>

            {images.length > 1 && (
                <>
                    <button className="carousel-arrow left" onClick={prevSlide}>
                        <ChevronLeft size={32} />
                    </button>
                    <button className="carousel-arrow right" onClick={nextSlide}>
                        <ChevronRight size={32} />
                    </button>

                    <div className="carousel-dots">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            ></div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Carousel
