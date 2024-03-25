import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let intervalId;

    if (autoplay) {
      intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 3000); // Adjust autoplay interval as needed
    }

    return () => clearInterval(intervalId);
  }, [autoplay, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-screen-xl mx-auto relative">
      <div
        className="carousel relative shadow-2xl bg-white w-full"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <div className="relative w-full h-64 overflow-hidden">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              style={{ height: '100%', objectFit: 'cover' }}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex justify-between items-center p-4">
          <div>
            <button
              className="w-10 h-10 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
              onClick={prevSlide}
            >
              &lt;
            </button>
            <button
              className="w-10 h-10 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 ml-4"
              onClick={nextSlide}
            >
              &gt;
            </button>
          </div>
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full bg-gray-500 hover:bg-gray-700 cursor-pointer ${
                  index === currentSlide ? 'bg-pink-500' : ''
                }`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-10 text-center">
          <h1 className={`text-3xl font-bold text-white transition-transform duration-1000 ${currentSlide === 0 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            THE BIGGEST JOLLOF FESTIVAL in ADDIS-ABABA! 
          </h1>
          <h6 className={`text-lg font-semibold text-white transition-transform duration-1000 ${currentSlide === 0 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            Jollof is more than just a rice dish - it’s the thread that ties diverse people together
          </h6>
          <button className={`mt-12 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-transform duration-1000 ${currentSlide === 0 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            Button
          </button>
          <button className={`mt-12 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-4 rounded transition-transform duration-1000 ${currentSlide === 0 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
