import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'resume', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-90 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white">KC</a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className={`transition-colors ${activeSection === 'home' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Home</a>
          <a href="#about" className={`transition-colors ${activeSection === 'about' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>About</a>
          <a href="#projects" className={`transition-colors ${activeSection === 'projects' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Projects</a>
          <a href="#resume" className={`transition-colors ${activeSection === 'resume' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Resume</a>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a href="#home" className={`${activeSection === 'home' ? 'text-white' : 'text-gray-400'}`} onClick={toggleMenu}>Home</a>
            <a href="#about" className={`${activeSection === 'about' ? 'text-white' : 'text-gray-400'}`} onClick={toggleMenu}>About</a>
            <a href="#projects" className={`${activeSection === 'projects' ? 'text-white' : 'text-gray-400'}`} onClick={toggleMenu}>Projects</a>
            <a href="#resume" className={`${activeSection === 'resume' ? 'text-white' : 'text-gray-400'}`} onClick={toggleMenu}>Resume</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 