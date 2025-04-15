import React, { useState } from 'react';

const info = [
  { label: 'Configuration', value: '2 & 3 BHK' },
  { label: 'Carpet Area', value: '800 - 814 sq.ft.' },
  { label: 'Towers', value: '13' },
  { label: 'Floors', value: 'G+24' },
  { label: 'Total Units', value: '821' },
  { label: 'Project Area', value: '19.5 Acres' },
  { label: 'Open Space', value: '7 Acres' },
  { label: 'RERA No.', value: 'P52100005377 / P52100007566' },
];

const PropertyInfoCards = ({ onInquireClick }) => {
  const [readMore, setReadMore] = useState(false);

  const shortText = `If you are looking for an elegant apartment in Pune, have a look at the new apartments at Keshav Nagar. This part of the city has witnessed a transformation in infrastructure in recent years.`;

  const fullText = `If you are looking for an elegant apartment in Pune, have a look at the new apartments at Keshav Nagar. This part of the city has witnessed a transformation in infrastructure in recent years. Property owners are willing to relocate to Keshav Nagar to benefit from the wide range of civic amenities.
The locality is connected to the commercial zones in Pune through a dense network of roads. If you are willing to get a new apartment in this area, have a look at Purva Silversands. The new gated community comes with 2 and 3 BHK apartments, and these homes stand apart with their superior interior designs.
The residential units are well-ventilated and come with lots of amenities to elevate your quality of lifestyle. Check out the Purva Silversands floor plan and book the configuration that you need before the property prices rise.
The project at Purva Silversands Pune has been developed on 19 acres. From these homes, you can get a mesmerizing view from all the apartments. There are 7 acres of open spaces in the project, where you can spend a quality time around your homes.
The developers have integrated 4 apartments into each of the floors. With private decks and large windows in the apartments, you can embrace a dynamic lifestyle. The project also comes with 3 levels of car parking space where you can keep your vehicle organized. Have a look at the Purva Silversands photos and check out the amenities that it comes with.
In the clubhouse, residents can engage in activities appealing to their lifestyles. Some of the popular amenities in the complex include play areas for kids, a swimming pool, and a gym.
You can also access the multipurpose hall and host different events in the complex. Get a property in Keshav Nagar in this estate and elevate the quality of your lifestyle. Lots of recreational amenities have been provisioned for in this estate.
Considering the location of this project, investors and homeowners are booking their apartments. These properties in Pune are located close to the business hubs in the city. You can seamlessly get across to the reputed schools and hospitals around these homes.
Check out the Purva Silversands payment plan and book your apartment in this project. You will appreciate the elevated standard of living in the project.`;

  return (
    <div className="-mt-1 px-4">
  
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {info.map((item, index) => (
          <div
            key={index}
            className="bg-white transition duration-300 p-4 rounded-md shadow-md hover:shadow-lg border border-gray-200"
            style={{
              boxShadow: '0 4px 12px rgba(128, 90, 213, 0.15)', 
            }}
          >
            <h3 className="text-gray-500 text-xs">{item.label}</h3>
            <p className="text-base font-semibold text-gray-800 mt-1">{item.value}</p>
          </div>
        ))}
      </div>


      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Book Your New Apartment at Purva Silversands in Pune
      </h2>

 
      <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto text-justify">
        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
          {readMore ? fullText : shortText}
        </p>

        <div className="text-center mt-4">
          <button
            onClick={() => setReadMore(!readMore)}
            className="text-purple-500 font-medium underline hover:text-blue-800"
          >
            {readMore ? 'Read Less' : 'Read More'}
          </button>
        </div>

      
        {/* <div className="mt-8 flex justify-center">
          <button className="bg-purple-500 text-white px-8 py-3 rounded-full shadow-md text-lg font-semibold hover:bg-purple-700 transition duration-300"
            onClick={onInquireClick}>
            Inquire Now!
          </button>
        </div> */}
        {onInquireClick && (
  <div className="text-center mt-6">
    <button
      onClick={onInquireClick}
      className="bg-purple-600 text-white px-6 py-3 rounded-md shadow hover:bg-purple-700 transition duration-300"
    >
      Inquire Now
    </button>
  </div>
)}

      </div>
    </div>
  );
};

export default PropertyInfoCards;
