'use client';

import Image from 'next/image';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaArrowUp
} from 'react-icons/fa';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Footer Section */}
      <footer className="bg-[#097199] py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
          {/* Left: Logo + Social Icons */}
          <div className="flex items-center space-x-6">
            <Image src="/iris-white.png" alt="Logo" width={120} height={40} />
            <div className="flex space-x-3 text-white">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          {/* Center: Copyright */}
          <div className="text-sm text-white text-center">
            © {new Date().getFullYear()} RISING SPACES. All Rights Reserved. Designed by{' '}
            <span className="underline underline-offset-2">
              <a href="/privacy-policy">Digitalize The Globe</a>
            </span>
          </div>

          {/* Right: Policy Links */}
          <div className="flex space-x-4 text-sm text-white">
            <a href="/privacy-policy" className="hover:underline underline-offset-2">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:underline underline-offset-2">Terms & Conditions</a>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <>
        {/* WhatsApp Button - Bottom Left */}
        <a
          href="https://wa.me/918378944777" // Replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 z-50"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={20} />
        </a>

        {/* Call + Scroll to Top - Bottom Right */}
        <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-3 z-50">
          {/* Call Button */}
          <a
            href="tel:+918378944777" // Replace with your number
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
            aria-label="Call"
          >
            <FaPhoneAlt size={20} />
          </a>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-800"
            aria-label="Scroll to Top"
          >
            <FaArrowUp size={20} />
          </button>
        </div>
      </>
    </>
  );
}
