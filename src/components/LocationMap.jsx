import React from 'react';

const LocationMap = () => (
  <div className="my-8">
    <h2 className="text-2xl font-bold mb-4 text-black border-b-4 border-purple-500 inline-block">
 Location
    </h2>
    <iframe
      title="Purva Silversands Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2816949261176!2d73.94376477489667!3d18.56000798255319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14f6cf9e5c9%3A0x3549e17b4989b3a!2sPurva%20Silversands%2C%20Keshav%20Nagar%2C%20Pune!5e0!3m2!1sen!2sin!4v1713154137222!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

export default LocationMap;
