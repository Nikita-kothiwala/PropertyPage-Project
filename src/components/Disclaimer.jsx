import React, { useState } from "react";

const Disclaimer = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-white rounded-lg px-4 py-6 shadow-md mb-6">
      <h2 className="text-xl font-semibold text-black mb-4">Disclaimer</h2>
      <p
        className={`text-gray-700 text-sm leading-relaxed transition-all duration-300 ${
          expanded ? "line-clamp-none" : "line-clamp-3"
        }`}
      >
        This website is only for the purpose of providing information regarding real estate projects in different regions. By accessing this website, the viewer confirms that the information including brochures and marketing collaterals on this website is solely for informational purposes and the viewer has not relied on this information for making any booking/purchase in any project of the company. Nothing on this website constitutes advertising, marketing, booking, selling or an offer for sale, or invitation to purchase a unit in any project by the company. The company is not liable for any consequence of any action taken by the viewer relying on such material/ information on this website.

        Please also note that the company has not verified the information and the compliances of the projects. Further, the company has not checked the RERA (Real Estate Regulation Act 2016) registration status of the real estate projects listed here in. The company does not make any representation in regards to the compliances done against these projects. You should make yourself aware about the RERA registration status of the listed real estate projects before purchasing property.

        The contents of this Disclaimer are applicable to all hyperlinks under https://www.360realtors.com/. You hereby acknowledge of having read and accepted the same by use or access of this Website. Unless specifically stated otherwise, the display of any content (including any brand, logo, mark or name) relating to projects developed, built, owned, promoted or marketed by any third party is not to be construed as 360 Realtors association with or endorsement of such project or party. Display of such content is not to be understood as such party's endorsement of or association with 360 Realtors. All content relating to such project and/or party are provided solely for the purpose of information and reference. 360 Realtors is an independent organisation and is not affiliated with any third party relating to whom any content is displayed on the website.
      </p>

      <button
        onClick={toggleReadMore}
        className="mt-3 text-purple-600 hover:underline focus:outline-none"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default Disclaimer;
