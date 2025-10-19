import React, { useCallback, useEffect, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const ImageSlider = () => {
  const slides = [
    {
      url: 'https://cdn.britannica.com/80/179480-138-A0F9E136/poisoning-malaria-experts-decline-Roman-Empire.jpg?w=800&h=450&c=crop',
      title: 'slide1',
    },
    {
      url: 'https://image.jimcdn.com/app/cms/image/transf/dimension=2080x10000:format=jpg/path/s2217cd0bb1220415/image/idc34b1b04f8e96ed/version/1687833802/how-big-was-the-roman-empire.jpg',
      title: 'slide2',
    },
    {
      url: 'https://imperiumromanum.pl/wp-content/uploads/2017/08/group-of-gods-mount-olympus.jpg',
      title: 'slide3',
    },
    {
      url: 'https://factsanddetails.com/archives/003/201812/5c18a9a95daaa.jpg',
      title: 'slide4',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }, [currentIndex, slides.length])

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="max-w-full h-[580px] w-full m-auto py-16 px-4 relative group overflow-hidden">
      {/* Contenedor de slides */}
      <div
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 rounded-2xl bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.url})` }}
          ></div>
        ))}
      </div>

      {/* Flecha izquierda */}
      <div className="absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Flecha derecha */}
      <div className="absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* Dots de navegación */}
      <div className="flex top-4 justify-center py-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              currentIndex === slideIndex
                ? 'text-[var(--primary-purple)]'
                : 'text-[var(--primary-gold)]'
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
