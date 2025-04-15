import React from 'react';

const paymentPlans = [
  {
    unitType: '2 BHK',
    size: '800 (Carpet Area)',
    pricePerSqFt: 'On Request',
    amount: '₹ 1,06,00,000',
    bookingAmt: '₹ 10%',
  },
  {
    unitType: '2 BHK',
    size: '814 (Carpet Area)',
    pricePerSqFt: 'On Request',
    amount: '₹ 1,08,00,000',
    bookingAmt: '₹ 10%',
  },
];

const Payment = () => {
  return (
    <div className="my-8">
 
      <h2 className="text-2xl font-bold text-black border-b-4 border-purple-500 inline-block mb-6">
        Purva Silversands Payments Plan
      </h2>


      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-black text-white">
              <th className="px-4 py-2 border-r border-gray-300">Unit Type</th>
              <th className="px-4 py-2 border-r border-gray-300">Size (SQ. FT.)</th>
              <th className="px-4 py-2 border-r border-gray-300">Price (SQ. FT.)</th>
              <th className="px-4 py-2 border-r border-gray-300">Amount</th>
              <th className="px-4 py-2">Booking Amt</th>
            </tr>
          </thead>
          <tbody>
            {paymentPlans.map((plan, index) => {
              const rowBg =
                index === paymentPlans.length - 1
                  ? 'bg-gray-100'
                  : 'bg-gray-200';

              return (
                <tr key={index} className={`${rowBg} text-gray-800`}>
                  <td className="px-4 py-2 border border-gray-300">{plan.unitType}</td>
                  <td className="px-4 py-2 border border-gray-300">{plan.size}</td>
                  <td className="px-4 py-2 border border-gray-300">{plan.pricePerSqFt}</td>
                  <td className="px-4 py-2 border border-gray-300">{plan.amount}</td>
                  <td className="px-4 py-2 border border-gray-300">{plan.bookingAmt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
