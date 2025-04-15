import React, { useEffect, useState, useRef } from 'react';

const sections = ['Overview', "About", 'Amenities', 'Payment', 'Specification', 'Location',"Rating", 'Builder', 'Similar Projects'];

const StickyNav = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      let currentSection = 'overview';
      for (let section of sections) {
        const id = section.toLowerCase().replace(/\s/g, '-');
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      }
      setActiveSection(currentSection);

      if (navRef.current) {
        const offset = navRef.current.getBoundingClientRect().top;
        setIsSticky(offset <= 65);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      ref={navRef}
      className={`sticky top-[68px] z-50 bg-white border-b border-gray-200 ${
        isSticky ? 'px-0' : 'px-4'
      }`}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="flex overflow-x-auto py-3 space-x-6 text-sm font-medium text-gray-700">
          {sections.map((section) => {
            const id = section.toLowerCase().replace(/\s/g, '-');
            const isActive = activeSection === id;

            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative whitespace-nowrap transition-colors duration-200 ${
                  isActive
                    ? 'text-purple-500 font-semibold'
                    : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                {section}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-purple-500 rounded-full"></span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StickyNav;
