import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import house1 from "../images/house1.jpg"
const ImageCarousel = () => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="relative ">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src={house1} alt="Property" />
        </div>
      
      </Carousel>
      <button onClick={() => setFavorite(!favorite)} className="absolute top-4 right-4 text-red-500 text-2xl">
        {favorite ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default ImageCarousel;
