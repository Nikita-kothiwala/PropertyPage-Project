import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';
import house1 from "../images/house1.jpg";

const ContactForm = ({ forceVisible = false }) => {
  const [showForm, setShowForm] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  const handleClose = () => setDismissed(true);

  if ((!showForm && !forceVisible) || dismissed) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">

      <div className="w-[400px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-in-up relative">

        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl z-10"
        >
          <FiX />
        </button>

        <div className="relative">
          <img src={house1} alt="Property" className="w-full h-40 object-cover" />
          <div className="absolute bottom-2 left-3 bg-white bg-opacity-90 px-4 py-1 rounded-full shadow text-purple-700 font-semibold text-sm">
            Purva Silversands
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800 mb-1">Get in Touch</h3>
          <p className="text-sm text-gray-600 mb-4">
            Please fill in your details below and we will get in touch with you shortly.
          </p>

          <form className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-700">I AM INTERESTED IN</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700 px-3 py-2 bg-gray-100 border rounded-md">+91 India</span>
              <input
                type="tel"
                placeholder="Phone"
                className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1" />
              <label>
                I agree to T&C & Privacy
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300 font-semibold"
            >
              Get Call
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

