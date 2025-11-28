'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { scrollToSection } from '@/utils/helpers';

export function Header({ onEnquireClick }: { onEnquireClick: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setMenuOpen(false); // close mobile menu on nav click
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          <Image 
            src="/logo.png" 
            alt="codename tathastu Logo" 
            width={120} 
            height={60} 
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Nav */} 
        <nav className="hidden md:flex space-x-8">
          {['home', 'about', 'amenities', 'gallery', 'contact'].map((section) => (
            <button 
              key={section}
              onClick={() => handleNavClick(section)} 
              className="cursor-pointer text-gray-700 hover:text-[#097199] transition capitalize"
            >
              {section === 'home' ? 'Home' : 
               section === 'about' ? 'About Us' :
               section === 'amenities' ? 'Amenities' :
               section === 'gallery' ? 'Gallery' : 
               section === 'contact' ? 'Contact Us' : 'contact'}
            </button>
          ))}
        </nav>

        {/* Desktop Enquire Button */}
        <button 
          onClick={onEnquireClick}
          className="hidden md:block bg-[#097199] text-white px-4 py-2 rounded-md hover:bg-[#075a7a] transition cursor-pointer"
        >
          Enquire Now
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={handleMenuToggle} className="text-2xl text-[#097199] cursor-pointer">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-md space-y-4">
          {['home', 'about', 'amenities', 'gallery', 'contact'].map((section) => (
            <button 
              key={section}
              onClick={() => handleNavClick(section)} 
              className="block w-full text-left text-gray-700 hover:text-[#097199] transition capitalize cursor-pointer"
            >
              {section === 'home' ? 'Home' : 
               section === 'about' ? 'About Us' :
               section === 'amenities' ? 'Amenities' :
               section === 'gallery' ? 'Gallery' : 
               section === 'contact' ? 'Contact Us' : 'contact'}
            </button>
          ))}

          {/* Mobile Enquire Button */}
          <button 
            onClick={() => {
              onEnquireClick();
              setMenuOpen(false);
            }}
            className="w-full bg-[#097199] text-white px-4 py-2 rounded-md hover:bg-[#075a7a] transition cursor-pointer"
          >
            Enquire Now
          </button>
        </div>
      )}
    </header>
  );
}
