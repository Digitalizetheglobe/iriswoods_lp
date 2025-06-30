'use client';

import Image from 'next/image';
import { scrollToSection } from '@/utils/helpers';

export function Header({ onEnquireClick }: { onEnquireClick: () => void }) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="IRIS WOODS Logo" 
            width={120} 
            height={60} 
            className="h-12 w-auto"
          />
        </div>

        <nav className="hidden md:flex space-x-8">
          {['home', 'about', 'amenities', 'gallery', 'contact'].map((section) => (
            <button 
              key={section}
              onClick={() => scrollToSection(section)} 
              className="text-gray-700 hover:text-[#097199] transition capitalize"
            >
              {section === 'home' ? 'Home' : 
               section === 'about' ? 'About Us' :
               section === 'amenities' ? 'Amenities' :
               section === 'gallery' ? 'Gallery' : 
               section === 'contact' ? 'Contact Us' : 'contact'}
            </button>
          ))}
        </nav>

        <button 
          onClick={onEnquireClick}
          className="bg-[#097199] text-white px-4 py-2 rounded-md hover:bg-[#075a7a] transition"
        >
          Enquire Now
        </button>
      </div>
    </header>
  );
}
