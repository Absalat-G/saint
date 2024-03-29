import React from 'react';
import RectangularPicture from '../images/gallery1.png'; // Importing rectangular picture
import CirclePicture from '../images/gallery2.png'; // Importing circle picture
// import image4 from '../images/gallery1.png';
// import image5 from '../images/carousel3.png';
// import image6 from '../images/gallery2.png';


const Tickets = () => {
  // const images1 = [image4, image5, image6];
  return (
    <div className="relative w-full h-full">
      {/* Rectangular shape picture */}
      <img
        src={RectangularPicture}
        alt="Rectangular Shape Picture"
        className="w-full h-96 object-cover rounded-lg"
      />
      {/* Circle shape picture overlapping at the bottom */}
     
        {/* Text below the circle */}
        <div className='flex flex-col-reverse'>
        <div className="absolute bottom-0 left-1/2 top-1/3 transform -translate-x-1/2">
        <img
          src={CirclePicture}
          alt="Circle Shape Picture"
          className="w-64 h-64 object-cover rounded-full border-4 border-white -mb-12"
        />
        </div>
      
        
        </div>
        <div className="mt-48 text-center "> {/* Changed mt-6 to mt-12 */}
          <p className="text-lg font-bold">JOLLOF SUMMIT</p>
          <p className="text-sm">GHION HOTEL, Addis Ababa</p>
          <p className="text-sm">Wed, 6th March 2024</p>
          <p className="text-sm">10:00 am - 9:00 pm</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Upcoming in 92 day(s)
          </button>
          <p className='text-center mt-2'>Addis Ababa’s biggest Jollof Festival! The epic festival where flavor meets fun and  your inner foodie comes alive!<br /> With incredible flavors, incredible people and unforgettable vibes. It’s the most iconic Jollof Summit<br /> coming together for an unforgettable taste adventure.</p>
        </div>
        <div className="mt-6 text-center mb-8">
    <div className="inline-block ">
      <h1 className="text-3xl font-semibold mb-4">
        <span className="border-b-2 border-gray-300 pb-2">Tickets</span>
       
      </h1>
      <p className='mt-2'>Select Tickets to register</p>
    </div>
    </div>
      {/* First card for tickets */}
      <div className="absolute bottom-12 left-1/3 transform -translate-x-1/2 -mb-64">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Single Ticket</h2>
          <p className="text-sm mb-2">Access to VIP area</p>
          <p className="text-sm mb-2">VIP lounge access</p>
          <p className="text-sm mb-2">VIP parking</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Buy Now
          </button>
        </div>
      </div>
      {/* Second card for tickets */}
      <div className="absolute bottom-12 right-1/3 transform translate-x-1/2 -mb-64">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Double Ticket</h2>
          <p className="text-sm mb-2">Access to event area</p>
          <p className="text-sm mb-2">Food and drink vouchers</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Buy Now
          </button>
        </div>
      </div>
      {/* <div className='mb-2 border-b-2 border-inherit pb-2'>
      <Gallery title= "Gallery" images1={images1} />
      </div>  */}
    </div>
  );
};

export default Tickets;
