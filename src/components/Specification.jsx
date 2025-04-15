import React from 'react';

const specifications = [
  '19 acres of beach perts.',
  'Mesmerizing views from all apartments.',
  '7 acres open spaces.',
  '4 apartments on every floor.',
  '3 acres dedicated only for amenities.',
  '13 majestic towers 216 38 stories.',
  '3 private decks for sed apartments.',
  '22+ best-in-class amenities.',
  '3 level car park.',
  'Vastu compliant homes.',
];

const Specification = () => {
  return (
    <div className="my-8">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-black border-b-4 border-purple-500 inline-block mb-6">
        Purva Silversands Specification
      </h2>

      {/* Specifications List */}
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        {specifications.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Specification;
