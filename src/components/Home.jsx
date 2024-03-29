import React from 'react';
import Carousel from './Carousel';
import Gallery from './Gallery';
import Contact from './Contact';
import Partner from './Partner';
import image1 from '../images/carousel1.png';
import image2 from '../images/carousel2.png';
import image3 from '../images/carousel3.png';
import image4 from '../images/gallery1.png';
import image5 from '../images/carousel3.png';
import image6 from '../images/gallery2.png';

const Home = () => {
  const images = [image1, image2, image3];
  const images1 = [image4, image5, image6];
 
  return (
    <div className="bg-black text-white min-h-screen">
      <Carousel images={images} />
      <div className="m-2 gap-4 flex flex-wrap justify-center text-white">
        <div className="p-4 border-r border-gray-300">
          Independence day<br />6th march, 2024<br />11am - 10pm
        </div>
        <div className="p-4 border-r border-gray-300">
          GHION HOTEL<br />Addis - Ababa
        </div>
        <div className="p-4">
          Celebrating arguably<br />WA’s best and most<br />popular indigenous dish
        </div>
      </div>
      <div className='mb-2 border-b-2 border-inherit pb-2'>
        <Gallery title= "Gallery" images1={images1} />
      </div>
   
      <div className="m-2 gap-4 flex flex-wrap justify-center mb-2 border-b-2 border-inherit pb-2">
        <div className="p-4 font-bold text-2xl">
          500+<br />Jollof Lovers <br />
        </div>
        <div className="p-4 font-bold text-2xl">
          20+ <br />Vendor
        </div>
        <div className="p-4">
          The epic festival where flavor meets fun and  your inner <br />
          foodie comes alive! With incredible flavors, incredible people<br /> and unforgettable vibes.
          It’s the most iconic Jollof Summit<br /> coming together for an unforgettable taste adventure.
        </div>
      </div>
      <div className=''>
        <Partner title= "Partner" />
      </div>
      <div className="container mx-auto py-8 mt-48 border-t-2 border-inherit pt-2">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
