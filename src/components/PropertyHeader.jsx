import React from 'react';
import { FaRulerCombined, FaRupeeSign, FaRegClock, FaHome } from 'react-icons/fa';
import { MdVerifiedUser } from 'react-icons/md';

const PropertyHeader = () => {
  return (
    <section className="px-4 py-6 bg-white shadow rounded-md">
      <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row justify-between gap-6">
        
    
        <div className="space-y-1">
          <h1 className="text-4xl font-bold text-black">Purva Silversands</h1>
          <p className="text-purple-600 font-medium">Keshav Nagar, Pune</p>
          <p className="text-gray-700">By Puravankara Limited</p>

          <div className="mt-2 space-y-1 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <FaRulerCombined className="text-purple-500" />
              <span>800 - 814 SQ. FT.</span>
            </div>
            <div className="flex items-center gap-2">
              <MdVerifiedUser className="text-green-500" />
              <span>RERA Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRegClock className="text-purple-500" />
              <span>Last Updated: 02 April, 2025</span>
            </div>
          </div>
        </div>

      
        <div className="flex flex-col justify-center items-end space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-1 text-right">
            <FaHome className="text-purple-600" />
            <p className="font-medium">2 & 3 BHK</p>
          </div>
          <div className="flex items-center gap-1 text-purple-600 font-semibold text-3xl">
            <FaRupeeSign />
            <span>1.06 Cr. - 1.08 Cr.*</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyHeader;
