'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectOverview } from '@/components/sections/ProjectOverview';
import { WhySection } from '@/components/sections/WhySection';
import { AmenitiesSection } from '@/components/sections/AmenitiesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { LocationSection } from '@/components/sections/LocationSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Header } from '@/components/common/Header';
import { Modal } from '@/components/common/Modal';
import { Footer } from '@/components/common/Footer';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes with phone validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      if (digitsOnly.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: digitsOnly }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Form validation before submit
  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      alert('Please fill in all the fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert('Phone number must be exactly 10 digits.');
      return;
    }

    // If all validations pass
    console.log('Enquiry submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen font-sans">
      <Header onEnquireClick={() => setIsModalOpen(true)} />

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectOverview />
        <WhySection />
        <AmenitiesSection />
        <GallerySection />
        <LocationSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Enquiry Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {isSubmitted ? (
          <div className="text-center py-4">
            <div className="text-green-500 mb-2">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
            <p className="text-gray-600">We'll get back to you soon.</p>
          </div>
        ) : (
          <div>
            <form onSubmit={handleEnquirySubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded placeholder:text-gray-400 text-[#097199]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded placeholder:text-gray-400 text-[#097199]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                maxLength={10}
                className="w-full p-2 border rounded placeholder:text-gray-400 text-[#097199]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                required
                className="w-full p-2 border rounded placeholder:text-gray-400 text-[#097199]"
              />
              <button
                type="submit"
                className="w-full bg-[#097199] text-white px-4 py-2 rounded hover:bg-[#075a7a]"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
}
