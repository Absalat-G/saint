import React from 'react'
import Carousel from './Carousel';
import image1 from '../images/carousel1.png';
import image2 from '../images/carousel2.png';
import image3 from '../images/carousel3.png';
const Home = () => {
    
    const images = [image1, image2, image3];
  return (
    <div>
        <div className="App">
   
      <Carousel images={images} />
    </div>
    </div>
  )
}

export default Home