// import React from 'react';
// import ImageCarousel from '../components/ImageCarousel';
// import PropertyHeader from '../components/PropertyHeader';
// import PropertyInfoCards from '../components/PropertyInfoCards';
// import AmenitiesList from '../components/AmenitiesList';
// import AboutProject from '../components/AboutProject';
// import LocationMap from '../components/LocationMap';
// import ContactForm from '../components/ContactForm';
// import Footer from '../components/Footer';
// import Header from '../components/Header';
// import StickyNav from '../components/StickyNav';
// import SimilarProperties from '../components/SimilarProperties';
// import Payment from '../components/Payment';
// import Specification from '../components/Specification';
// import Developer from '../components/Developers';
// import Disclaimer from "../components/Disclaimer";
// import Rating from "../components/Rating"
// const PropertyDetailsPage = () =>  (
//   <div className="bg-gray-200 min-h-screen">
//     <Header />

//     <main className="mx-[10px] space-y-3 pt-6">
 
//       <div className="bg-white rounded-lg shadow -p-1 mt-[60px]">
//         <ImageCarousel />
//       </div>

//       <div className="bg-white rounded-lg shadow p-4">
//         <PropertyHeader />
//       </div>

//       <div className="sticky top-[65px] z-40 bg-white shadow  w-full">
//         <StickyNav />
//       </div>

//       <div id="overview" className="bg-white rounded-lg shadow p-4">
//         <PropertyInfoCards />
//       </div>

//       <div id="about" className="bg-white rounded-lg shadow p-4">
//         <AboutProject />
//       </div>

//       <div id="amenities" className="bg-white rounded-lg shadow p-4">
//         <AmenitiesList />
//       </div>
//       <div id="payment" className="bg-white rounded-lg shadow p-4">
//         <Payment />
//       </div>

//       <div id="specification" className="bg-white rounded-lg shadow p-4">
//     <Specification/>
//       </div>
//       <div id="location" className="bg-white rounded-lg shadow p-4">
//         <LocationMap />
//       </div>

//       <div id="rating" className="bg-white rounded-lg shadow p-4">
//         <Rating/>
//       </div>

//       <div id="builder" className="bg-white rounded-lg shadow p-4">
//       <Developer/>
//       </div>

//       <div id="similar-projects" className="bg-white rounded-lg shadow p-4">
//      <SimilarProperties/>
// </div>

  
//       <div  className="bg-white rounded-lg shadow p-4">
//         <ContactForm />
//       </div>


//   <div  className="bg-white rounded-lg shadow p-4">
//        <Disclaimer/>
// </div>
//       <div id="faqs" className="bg-white rounded-lg shadow p-4">
//         <Footer />
//       </div>
//     </main>
//   </div>
// );

// export default PropertyDetailsPage;        

import React, { useState } from 'react';
import ImageCarousel from '../components/ImageCarousel';
import PropertyHeader from '../components/PropertyHeader';
import PropertyInfoCards from '../components/PropertyInfoCards';
import AmenitiesList from '../components/AmenitiesList';
import AboutProject from '../components/AboutProject';
import LocationMap from '../components/LocationMap';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import StickyNav from '../components/StickyNav';
import SimilarProperties from '../components/SimilarProperties';
import Payment from '../components/Payment';
import Specification from '../components/Specification';
import Developer from "../components/Developers";
import Disclaimer from "../components/Disclaimer";
import Rating from "../components/Rating";

const PropertyDetailsPage = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleInquireClick = () => {
    setShowContactForm(true);
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />

      <main className="mx-[10px] space-y-3 pt-6">
        <div className="bg-white rounded-lg shadow -p-1 mt-[60px]">
          <ImageCarousel />
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <PropertyHeader />
        </div>

        <div className="sticky top-[65px] z-40 bg-white shadow w-full">
          <StickyNav />
        </div>

        <div id="overview" className="bg-white rounded-lg shadow p-4">
          <PropertyInfoCards onInquireClick={handleInquireClick} />
        </div>

        <div id="about" className="bg-white rounded-lg shadow p-4">
          <AboutProject />
        </div>

        <div id="amenities" className="bg-white rounded-lg shadow p-4">
          <AmenitiesList />
        </div>

        <div id="payment" className="bg-white rounded-lg shadow p-4">
          <Payment />
        </div>

        <div id="specification" className="bg-white rounded-lg shadow p-4">
          <Specification />
        </div>

        <div id="location" className="bg-white rounded-lg shadow p-4">
          <LocationMap />
        </div>

        <div id="rating" className="bg-white rounded-lg shadow p-4">
          <Rating />
        </div>

        <div id="builder" className="bg-white rounded-lg shadow p-4">
          <Developer />
        </div>

        <div id="similar-projects" className="bg-white rounded-lg shadow p-4">
          <SimilarProperties />
        </div>
       
        <div  className="bg-white rounded-lg shadow p-4">
          <Disclaimer />
        </div>
        <div  className="bg-white rounded-lg shadow p-4">
          <Footer />
        </div>
      </main>

      {showContactForm && (
  <div className="bg-white rounded-lg shadow p-4">
    <ContactForm />
  </div>
)}

    </div>
  );
};

export default PropertyDetailsPage;
