import React, { useState } from 'react';
import { FaSearch ,FaPhoneAlt} from 'react-icons/fa';

const Header = () => {
  const [city, setCity] = useState('Pune');
  const [showCitySelector, setShowCitySelector] = useState(false);
  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai',
    'Kolkata', 'Ahmedabad', 'Pune', 'Jaipur', 'Surat',
    'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane',
    'Bhopal', 'Visakhapatnam', 'Nashik', 'Vadodara', 'Agra'
  ];

  return (
    <header className="fixed top-0 w-full bg-white  z-50 shadow-md border-b border-gray-100  ">
      <div className="flex items-center justify-between px-6 py-3">
    
        <div className="relative">
          <button
            onClick={() => setShowCitySelector(!showCitySelector)}
            className="text-gray-800 font-medium bg-gray-100 px-4 py-2 rounded-md shadow-sm hover:bg-gray-200 transition"
          >
            {city} <span className="ml-1">&#9662;</span>
          </button>
          {showCitySelector && (
            <div className="absolute mt-2 bg-white border rounded-lg shadow-lg p-4 w-[300px] z-50 grid grid-cols-2 gap-2 max-h-[250px] overflow-y-auto">
              {cities.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setCity(c);
                    setShowCitySelector(false);
                  }}
                  className="px-3 py-2 bg-gray-50 rounded hover:bg-blue-100 text-gray-700 text-sm text-left transition"
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>

     
        <div className="relative w-[40%]">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by City, Location, Project, Developer"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-inner text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

      
        <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg shadow text-sm text-gray-700 font-medium">
  <FaPhoneAlt className="text-purple-600" />
  +91-1234567890
</div>
      </div>
    </header>
  );
};

export default Header;
