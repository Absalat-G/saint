import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

 
  useEffect(() => {
    let intervalId;

    if (autoplay) {
      intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 4000); 
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
    <div className="w-full overflow-hidden">
      {/* Menu Bar */}
      <div className={`fixed left-0 top-0 mt-6  w-64 bg-gray-700 flex items-center justify-center z-50 transition-transform duration-500 ${showMenu ? 'translate-x-0' : '-translate-x-full'}`} style={{height: '570px'}}>
        <ul className="text-white">
          <li className="py-2 cursor-pointer" onClick={() => navigate('/about')}>ABOUT US</li>
          <li className="py-2 cursor-pointer" onClick={() =>  navigate('/tickets')}>TICKETS</li>
          <li className="py-2 cursor-pointer" onClick={() => navigate('/vendor')}>BECOME A VENDOR</li>
          <li className="py-2 cursor-pointer" onClick={() => navigate('/gallery')}>GALLERY</li>
          <li className="py-2 cursor-pointer" onClick={() => navigate('/vote')}>VOTE</li>
          <li className="py-2 cursor-pointer" onClick={() => navigate('/contact')}>CONTACT</li>
        </ul>
        
      </div>

      {/* Carousel Content */}
      <div className="relative">
        <div
          className="carousel relative shadow-2xl bg-white w-full h-full"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Carousel Images */}
          <div className="relative w-full h-96 overflow-hidden" style={{height: '600px'}}>
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

          {/* Navigation Buttons */}
          <div className="absolute inset-x-0 bottom-0 flex justify-end items-center p-4">
          
            <div className="flex space-x-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full bg-gray-500 hover:bg-gray-700 cursor-pointer ${
                    index === currentSlide ? 'bg-pink-500' : ''
                  }`}
                  onClick={() => setCurrentSlide(index)}
                ></div>
              ))}
            </div>
            <div>
              <button
                className="w-8 h-8 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
                onClick={prevSlide}
              >
                &lt;
              </button>
              <button
                className="w-8 h-8 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 ml-4"
                onClick={nextSlide}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-x-0 bottom-10 text-center z-20">
        <h1 className={`text-3xl font-bold text-white transition-transform duration-1000 ${currentSlide === 0 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          THE BIGGEST JOLLOF FESTIVAL <br /> in ADDIS-ABABA!
          </h1>

       <h6 className={`text-lg mt-6 font-semibold text-white transition-transform duration-1000 ${currentSlide === 0 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        Jollof is more than just a rice dish - it’s <br /> the thread that ties diverse people together
        </h6>

          <div className='mt-64'>
          <button className={`mt-12 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-transform duration-1000 ${currentSlide === 0 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            GET TICKETS HERE
          </button>
          <button className={`mt-12 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-4 rounded transition-transform duration-1000 ${currentSlide === 0 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            BECOME A VENDOR
          </button>
          </div>
        </div>
      </div>

      {/* Menu Button */}
      <button
        className="fixed top-4 left-4 bg-gray-700 text-white rounded-full h-10 w-10 flex items-center justify-center z-50"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        {showMenu ? 'X' : '☰'}
      </button>
    </div>
  );
};

export default Carousel;
