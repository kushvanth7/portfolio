import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = '770-465-3121';
  
  return (
    <footer className="bg-black text-white py-6 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <span className="font-bold text-lg">{phoneNumber}</span>
        </div>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com" className="text-gray-400 hover:text-white">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 