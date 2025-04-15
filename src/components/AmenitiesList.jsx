import React from 'react';
import {
  FaBuilding,
  FaSwimmer,
  FaDumbbell,
  FaBolt,
  FaTint,
  FaCar,
  FaYinYang,
  FaUsers,
  FaVideo,
  FaArrowUp,
  FaShieldAlt,
  FaMountain,
  FaRunning
} from 'react-icons/fa';

const amenities = [
  { name: 'Club House', icon: <FaBuilding /> },
  { name: 'Swimming Pool', icon: <FaSwimmer /> },
  { name: 'Gym', icon: <FaDumbbell /> },
  { name: 'Power Backup', icon: <FaBolt /> },
  { name: '24 Hour Water Supply', icon: <FaTint /> },
  { name: 'Car Parking', icon: <FaCar /> },
  { name: 'Vastu Compliant', icon: <FaYinYang /> },
  { name: 'Multipurpose Hall', icon: <FaUsers /> },
  { name: 'Video Security', icon: <FaVideo /> },
  { name: 'Lift', icon: <FaArrowUp /> },
  { name: '24X7 Security', icon: <FaShieldAlt /> },
  { name: 'Earthquake Resistant', icon: <FaMountain /> },
  { name: 'Jogging Track', icon: <FaRunning /> },
];

const AmenitiesList = () => (
  <div className="my-8">
  
    <h2 className="text-2xl font-bold mb-4 text-black border-b-4 border-purple-500 inline-block">
    Purva Silversands Amenities
    </h2>
    
 
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      {amenities.map((amenity, index) => (
        <li key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300">
          <div className="flex justify-center items-center w-10 h-10 border-2 border-purple-500 rounded-full p-2">
            {amenity.icon}
          </div>
          <span className="text-md font-medium">{amenity.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default AmenitiesList;
