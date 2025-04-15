import React, { useState } from 'react';
import { FaRegCalendarAlt, FaCity, FaProjectDiagram, FaSpinner } from 'react-icons/fa';

const Developer = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="my-8">

      <h2 className="text-2xl font-bold text-black border-b-4 border-purple-500 inline-block mb-6">
        About Developer
      </h2>


      <h3 className="text-xl font-bold text-black mb-4">Puravankara Limited</h3>

   
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="flex flex-col items-center bg-white p-4 shadow rounded">
          <FaRegCalendarAlt className="text-purple-600 text-2xl mb-2" />
          <span className="text-sm text-gray-500">Established</span>
          <span className="font-semibold text-black">1975</span>
        </div>
        <div className="flex flex-col items-center bg-white p-4 shadow rounded">
          <FaProjectDiagram className="text-purple-600 text-2xl mb-2" />
          <span className="text-sm text-gray-500">Total Projects</span>
          <span className="font-semibold text-black">65</span>
        </div>
        <div className="flex flex-col items-center bg-white p-4 shadow rounded">
          <FaSpinner className="text-purple-600 text-2xl mb-2" />
          <span className="text-sm text-gray-500">Ongoing Projects</span>
          <span className="font-semibold text-black">3</span>
        </div>
        <div className="flex flex-col items-center bg-white p-4 shadow rounded">
          <FaCity className="text-purple-600 text-2xl mb-2" />
          <span className="text-sm text-gray-500">City Present</span>
          <span className="font-semibold text-black">9</span>
        </div>
      </div>

    
      <h4 className="text-lg font-semibold mb-2">About Puravankara Group</h4>
      <p className="text-gray-700">
        Founded in the year 1975 in Bangalore with a clear vision and mission to meet the aspiration of teeming millions by offering quality homes,
        Puravankara Limited is one of the frontline real estate conglomerates in India today.
        {showMore && (
          <>
            {' '}
            During its last four decades of a remarkable corporate journey, the group has established its two distinct and highly successful brands on the
            country’s real estate firmament – namely, the flagship Puravankara brand and the equally famous, the Provident brand. While the former is known
            for catering to the premium end of the spectrum, the latter brand is positioned in the premium affordable segment.
          </>
        )}
      </p>
      <button
        onClick={toggleReadMore}
        className="text-purple-600 mt-2 font-semibold focus:outline-none"
      >
        {showMore ? 'Read Less' : 'Read More'}
      </button>
    </section>
  );
};

export default Developer;
