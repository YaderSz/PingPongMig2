'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { src: '/img/slider/1.webp', text: 'Image 3 Un Ultimo texto' },
  { src: '/img/slider/2.webp', text: 'Image 3 Un Ultimo texto' },
  { src: '/img/slider/3.webp', text: 'Image 3 Un Ultimo texto' }
];



const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent === length - 1 ? 0 : prevCurrent + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className="SliderTrans relative w-full h-screen overflow-hidden">
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10" onClick={prevSlide} aria-label="Previous slide">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="w-full h-full relative">
        {images.map((image, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}>
            {index === current && (
              <>
                <Image
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10" onClick={nextSlide} aria-label="Next slide">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
