import React from 'react'
import { useState, useEffect } from 'react'
import { Next, Previous } from '../../Icons'

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    <img src='/public/Carusel01.jpg' alt='Carusel01' className='w-full' />,
    <img src='/public/Carusel02.jpg' alt='Carusel02' className='w-full' />,
    <img src='/public/Carusel03.jpg' alt='Carusel03' className='w-full' />,
    <img src='/public/Carusel04.jpg' alt='Carusel04' className='w-full' />,
    <img src='/public/Carusel05.jpg' alt='Carusel05' className='w-full' />
  ]

  const prev = () =>
    setActiveSlide(currentSlide =>
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    )
  const next = () =>
    setActiveSlide(currentSlide =>
      currentSlide === slides.length - 1 ? 0 : currentSlide + 1
    )

  useEffect(() => {
    const slideInterval = setInterval(next, 6000)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div>
      <div
        id='default-carousel'
        className='relative w-2/3 mx-auto'
        data-carousel='slide'
      >
        {/* Carousel wrapper */}
        <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
          <div
            className='w-full h-full transition-transform ease-out duration-500'
            style={{
              display: 'flex',
              transform: `translateX(-${activeSlide * 100}%)`
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} style={{ flex: '0 0 100%', height: '100%' }}>
                <div
                  style={{ width: '100%', height: '100%', overflow: 'hidden' }}
                >
                  {slide}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Slider indicators */}
        <div className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
          {slides.map((_, index) => (
            <button
              key={index}
              type='button'
              className={`w-3 h-3 rounded-full ${
                index === activeSlide ? 'bg-yellow-400' : 'bg-yellow-700/30'
              } dark:${
                index === activeSlide ? 'text-gray-800' : 'text-gray-800/30'
              }`}
              aria-current={index === activeSlide ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => setActiveSlide(index)}
            ></button>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type='button'
          className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-prev
          onClick={prev}
        >
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-700/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <Previous className='w-4 h-4 text-white dark:text-yellow-400' />
            <span className='sr-only'>Previous</span>
          </span>
        </button>
        <button
          type='button'
          className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-next
          onClick={next}
        >
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-700/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <Next className='w-4 h-4 text-white dark:text-yellow-400' />
            <span className='sr-only'>Next</span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
