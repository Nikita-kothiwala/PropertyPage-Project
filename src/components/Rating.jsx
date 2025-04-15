import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

const ratingData = [
  [
    { title: "Location", rating: 5 },
    { title: "Safety", rating: 5 },
    { title: "Transport", rating: 4 },
    { title: "Connectivity", rating: 4 },
  ],
  [
    { title: "Cleanliness", rating: 4 },
    { title: "Affordability", rating: 3 },
    { title: "Amenities", rating: 5 },
    { title: "Public Services", rating: 4 },
  ],
  [
    { title: "Environment", rating: 5 },
    { title: "Noise Level", rating: 3 },
    { title: "Community", rating: 4 },
    { title: "Traffic", rating: 3 },
  ],
  [
    { title: "Schools", rating: 4 },
    { title: "Hospitals", rating: 5 },
    { title: "Shops", rating: 4 },
    { title: "Recreation", rating: 4 },
  ],
];

const Rating = () => {
  const [currentSet, setCurrentSet] = useState(0);

  const handleNext = () => {
    setCurrentSet((prev) => (prev + 1) % ratingData.length);
  };

  const handlePrev = () => {
    setCurrentSet((prev) => (prev - 1 + ratingData.length) % ratingData.length);
  };

  return (
    <div className="px-4 py-10 md:px-10">
      <h2 className="text-2xl font-bold text-black border-b-4 border-purple-600 inline-block mb-6">
        Rating
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentSet * 100}%)` }}>
          {ratingData.map((set, index) => (
            <div key={index} className="min-w-full flex justify-center gap-6 flex-wrap">
              {set.map((item, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-lg p-4 w-48 text-center"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <div className="text-purple-600 font-bold text-xl mb-1 flex justify-center items-center gap-1">
                    {item.rating} <FaStar className="text-yellow-500" />
                  </div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, j) => (
                      <FaStar
                        key={j}
                        className={`text-sm ${j < item.rating ? "text-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

   
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -translate-y-1/2 left-0 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-purple-600 hover:bg-purple-100"
        >
          <MdChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute top-1/2 -translate-y-1/2 right-0 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-purple-600 hover:bg-purple-100"
        >
          <MdChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Rating;
