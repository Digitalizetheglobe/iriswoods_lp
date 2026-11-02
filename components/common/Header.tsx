'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { scrollToSection } from '@/utils/helpers';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact Us' },
];

export function Header({ onEnquireClick }: { onEnquireClick: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isClickScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // If URL already has a hash on load, scroll to that section
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          scrollToSection(hash);
          setActiveSection(hash);
        }, 300);
      }
    }

    // Scroll spy to highlight active section on manual scroll only
    const handleScroll = () => {
      if (isClickScrollingRef.current) return;

      const scrollPosition = window.scrollY + 120;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();

    // Lock scroll-spy updates during the smooth scroll animation
    isClickScrollingRef.current = true;
    setActiveSection(section);

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 800);

    // Update URL hash once cleanly
    if (window.history.pushState) {
      window.history.pushState(null, '', `#${section}`);
    } else {
      window.location.hash = `#${section}`;
    }

    scrollToSection(section);
    setMenuOpen(false); // close mobile menu on nav click
  };


  return (
    <header className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home"
          className="flex items-center cursor-pointer"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <Image 
            src="/black.png" 
            alt="codename tathastu Logo" 
            width={120} 
            height={60} 
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Nav */} 
        <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)} 
              className={`cursor-pointer transition capitalize font-medium ${
                activeSection === item.id
                  ? 'text-[#584f48] border-b-2 border-[#584f48] pb-0.5'
                  : 'text-gray-700 hover:text-[#584f48]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Enquire Button */}
        <button 
          onClick={onEnquireClick}
          className="hidden md:block bg-[#584f48] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#584f48] border border-[#584f48] transition cursor-pointer"
        >
          Enquire Now
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button 
            onClick={handleMenuToggle} 
            className="text-2xl text-[#584f48] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-md space-y-4">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)} 
              className={`block w-full text-left transition capitalize cursor-pointer py-1 ${
                activeSection === item.id
                  ? 'text-[#584f48] font-semibold'
                  : 'text-gray-700 hover:text-[#584f48]'
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Mobile Enquire Button */}
          <button 
            onClick={() => {
              onEnquireClick();
              setMenuOpen(false);
            }}
            className="w-full bg-[#584f48] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#584f48] border border-[#584f48] transition cursor-pointer"
          >
            Enquire Now
          </button>
        </div>
      )}
    </header>
  );
}

