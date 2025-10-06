'use client';

import Image from 'next/image';
import { useState } from 'react';
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
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const [showWhatsAppChat, setShowWhatsAppChat] = useState(false);
  const [whatsAppMessage, setWhatsAppMessage] = useState('');

  const handleWhatsAppSend = () => {
    if (whatsAppMessage.trim() !== '') {
      const phoneNumber = '918378944777'; // Replace with your number
      const encodedMessage = encodeURIComponent(whatsAppMessage);
      if (typeof window !== 'undefined') {
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
      }
      setWhatsAppMessage('');
      setShowWhatsAppChat(false);
    }
  };

  return (
    <>
      {/* Footer Section */}
      <footer className="bg-[#097199] py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left: Logo + Social Icons */}
          <div className="flex items-center space-x-6">
            <Image src="/iris-white.png" alt="Logo" width={120} height={40} />
            
          </div>

          {/* Center: Copyright */}
          <div className="text-[16px] text-white text-center">
            © 2025 Copyright RISING SPACES. All Rights Reserved. Carefully Crafted By{' '}
            <span className="no-underline underline-offset-2 text-[#daf4fe]">
              <a href="https://digitalizetheglobe.com/" className='hover:text-[#b4cdd7]'>Digitalize The Globe</a>
            </span>
          </div>

          {/* Right: Policy Links */}
          <div className="flex space-x-4 text-sm text-white">
            {/* <a href="/privacy-policy" className="hover:underline underline-offset-2">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:underline underline-offset-2">Terms & Conditions</a> */}
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <>
        {/* WhatsApp Button - Bottom Left */}
        <button
          onClick={() => setShowWhatsAppChat(!showWhatsAppChat)}
          className="fixed bottom-15 left-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 z-50 cursor-pointer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={20} />
        </button>

        {/* WhatsApp Chat Popup */}
        {showWhatsAppChat && (
          <div className="fixed bottom-30 left-6 w-72 bg-white rounded-lg shadow-lg z-50 border">
            <div className="p-3 border-b bg-[#097199] text-white font-bold flex justify-between items-center">
              <span>Rising Spaces</span>
              <button className='cursor-pointer' onClick={() => setShowWhatsAppChat(false)}>✕</button>
            </div>
            <div className="p-3">
              <p className="text-sm text-gray-700 mb-2">Hey! 👋 How can we help you?</p>
              <textarea
                rows={2}
                className="w-full p-2 border rounded-md text-sm placeholder:text-[#097199] text-[#097199]"
                placeholder="Enter your message"   
                value={whatsAppMessage}
                onChange={(e) => setWhatsAppMessage(e.target.value)}
              />
              <button
                onClick={handleWhatsAppSend}
                className="mt-2 w-full bg-[#097199] text-white py-1.5 rounded-md hover:bg-[#304c58] cursor-pointer"
              >
                Send
              </button>
            </div>
          </div>
        )}

        {/* Call + Scroll to Top - Bottom Right */}
        <div className="fixed bottom-15 right-6 flex flex-col items-end space-y-3 z-50">
          <a
            href="tel:+918378944777"
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 cursor-pointer"
            aria-label="Call"
          >
            <FaPhoneAlt size={20} />
          </a>

          <button
            onClick={scrollToTop}
            className="bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 cursor-pointer"
            aria-label="Scroll to Top"
          >
            <FaArrowUp size={20} />
          </button>
        </div>
      </>
    </>
  );
}
