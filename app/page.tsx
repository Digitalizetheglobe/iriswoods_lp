'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EnquiryModalForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}

function EnquiryModalForm({ onSuccess }: { onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: cleaned }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      setErrorMessage('Please fill in all the fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setErrorMessage('Phone number must be exactly 10 digits.');
      return;
    }

    emailjs.send(
      'service_nxstnri',
      'template_p3qc84n',
      { name, email, phone, message },
      'WBMxQAh3tcC8dFXf8'
    ).then(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
        onSuccess();
      }, 3000);
    }).catch((error) => {
      console.error('EmailJS Error:', error);
      setErrorMessage('Failed to send. Please try again later.');
    });
  };

  return isSubmitted ? (
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMessage && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded placeholder:text-gray-400 text-[#097199]"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded placeholder:text-gray-400 text-[#097199]"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        maxLength={10}
        className="w-full p-2 border rounded placeholder:text-gray-400 text-[#097199]"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
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
  );
}
