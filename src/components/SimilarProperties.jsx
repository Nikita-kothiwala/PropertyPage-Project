import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import house4 from "../images/house5.jpg";
import house5 from "../images/house4.jpg";
import house6 from "../images/house6.jpg";
import house7 from "../images/house7.jpg";
import house8 from "../images/house8.jpg";
import house9 from "../images/house9.jpg";

const properties = [
  {
    image: house4,
    name: "Godrej Rejuve",
    rera: "RERA Approved",
    builder: "by Godrej Properties",
    location: "Keshav Nagar, Pune",
    unit: "2 & 3 BHK",
    size: "4000 SQ.FT",
    price: "₹ 8.4L - ₹ 8.8L",
  },
  {
    image: house5,
    name: "Godrej Greens",
    rera: "RERA Approved",
    builder: "by Godrej Properties",
    location: "Undri, Pune",
    unit: "2 & 3 BHK",
    size: "3500 SQ.FT",
    price: "₹ 7.5L - ₹ 8.2L",
  },
  {
    image: house6,
    name: "Godrej Horizon",
    rera: "RERA Approved",
    builder: "by Godrej Properties",
    location: "NIBM, Pune",
    unit: "2 & 3 BHK",
    size: "3800 SQ.FT",
    price: "₹ 8.0L - ₹ 9.0L",
  },
  {
    image: house7,
    name: "Godrej Nest",
    rera: "RERA Approved",
    builder: "by Godrej Properties",
    location: "Hinjewadi, Pune",
    unit: "2 & 3 BHK",
    size: "3900 SQ.FT",
    price: "₹ 8.2L - ₹ 9.1L",
  },
  {
    image: house8,
    name: "Godrej Hillside",
    rera: "RERA Approved",
    builder: "by Godrej Properties",
    location: "Baner, Pune",
    unit: "2 & 3 BHK",
    size: "3700 SQ.FT",
    price: "₹ 8.3L - ₹ 9.0L",
  },
  {
    image: house9,
    name: "Godrej Woodsville",
    rera: "RERA Approved",
    builder: "by Godrej Properties",
    location: "Mamurdi, Pune",
    unit: "2 & 3 BHK",
    size: "3600 SQ.FT",
    price: "₹ 8.0L - ₹ 8.9L",
  },
];

const SimilarProperties = () => {
  const cardsPerSet = 3;
  const totalSets = Math.ceil(properties.length / cardsPerSet);
  const [currentSet, setCurrentSet] = useState(0);
  const [favorites, setFavorites] = useState(Array(properties.length).fill(false));

  const toggleFavorite = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavorites(updatedFavorites);
  };

  const handleNext = () => {
    if (currentSet < totalSets - 1) {
      setCurrentSet(currentSet + 1);
    }
  };

  const handlePrev = () => {
    if (currentSet > 0) {
      setCurrentSet(currentSet - 1);
    }
  };

  return (
    <div className="relative bg-white p-6 rounded-xl shadow-lg overflow-hidden">
      <h2 className="text-2xl font-bold text-black mb-6 border-b-4 border-purple-500 inline-block">
        Similar Properties
      </h2>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${(properties.length * 100) / cardsPerSet}%`,
            transform: `translateX(-${(100 / totalSets) * currentSet}%)`,
          }}
        >
          {properties.map((property, index) => (
            <div
              key={index}
              className="p-2"
              style={{ width: `${100 / properties.length}%`, flexShrink: 0 }}
            >
              <div className="relative rounded-xl shadow-md overflow-hidden bg-gray-50 hover:shadow-lg transition-shadow duration-300">
            
                <div
                  className="absolute top-2 right-2 cursor-pointer z-10"
                  onClick={() => toggleFavorite(index)}
                >
                  {favorites[index] ? (
                    <AiFillHeart className="text-red-600 text-xl" />
                  ) : (
                    <AiOutlineHeart className="text-white  rounded-full text-xl p-0.99" />
                  )}
                </div>

              
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-black">
                      {property.name}
                    </h3>
                    <span className="text-sm text-green-600 font-medium">
                      {property.rera}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{property.builder}</p>
                  <p className="text-sm text-gray-500">{property.location}</p>
                  <div className="flex justify-between text-sm font-medium mt-2">
                    <span>{property.unit}</span>
                    <span>{property.size}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-purple-700 font-semibold">
                      {property.price}
                    </span>
                    <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm hover:bg-purple-700 transition duration-200">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentSet > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-purple-700 rounded-full p-3 shadow-md hover:bg-purple-100 transition z-10"
        >
          <FaChevronLeft />
        </button>
      )}

      {currentSet < totalSets - 1 && (
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-purple-700 rounded-full p-3 shadow-md hover:bg-purple-100 transition z-10"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default SimilarProperties;
