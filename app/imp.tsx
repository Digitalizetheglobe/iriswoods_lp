'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img from '../public/1.png';
import img1 from '../public/2.png';
import img2 from '../public/3.png';
import img3 from '../public/4.png';
import img4 from '../public/5.png';
import img5 from '../public/6.png';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState(false);
  const [isEnquiryFormSubmitted, setIsEnquiryFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });


const images = [img, img1, img2, img3, img4, img5];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Contact form submitted:', formData);
    setIsContactFormSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsContactFormSubmitted(false), 3000);
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Enquiry form submitted:', formData);
    setIsEnquiryFormSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => {
      setIsEnquiryFormSubmitted(false);
      setIsModalOpen(false);
    }, 3000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    

    <div className="min-h-screen font-sans">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="IRIS WOODS Logo" 
              width={120} 
              height={60} 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation - hidden on mobile, shown on md and up */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-[#097199] transition"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-[#097199] transition"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('amenities')} 
              className="text-gray-700 hover:text-[#097199] transition"
            >
              Amenities
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-gray-700 hover:text-[#097199] transition"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-[#097199] transition"
            >
              Contact Us
            </button>
          </nav>

          {/* Enquire Now Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#097199] text-white px-4 py-2 rounded-md hover:bg-[#075a7a] transition"
          >
            Enquire Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative">
        <div className="h-screen max-h-[800px] w-full">
          <Image 
            src="/banner.png" 
            alt="IRIS WOODS Banner" 
            layout="fill" 
            objectFit="cover" 
            quality={100}
          />
          
        </div>
      </section>

      {/* About Us Section */}
      <motion.section
        id="about"
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto w-300 px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-[#097199] mb-6">About IRIS WOODS</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  We are a global, boutique real estate brokerage offering premium NA residential plots near Hinjewadi Phase III, Ghotawade.
                </p>
                <p>
                  In the United States, the transfer acquisition of real estate. The bank's gross income is $100 million to customers. 
                  Sales and expenses from sales include cash in stores, loans, ponds, foreign fees, and tax rates that are free of use, 
                  sale, transmission, and credit rating, or expense.
                </p>
              </div>

              {/* Counters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-[#bae3f3] p-6 rounded-lg text-center border border-[#097199]">
                  <div className="text-xl font-bold text-[#097199] mb-2">1886-9686</div>
                  <div className="text-gray-600 text-[14px]">Plot Sizes (Sq. Ft.)</div>
                </div>
                <div className="bg-[#bae3f3] p-6 rounded-lg text-center border border-[#097199]">
                  <div className="text-xl font-bold text-[#097199] mb-2">₹3100</div>
                  <div className="text-gray-600 text-[14px]">Rate per Sq. Ft.</div>
                </div>
                <div className="bg-[#bae3f3] p-6 rounded-lg text-center border border-[#097199]">
                  <div className="text-xl font-bold text-[#097199] mb-2">₹2,99,000</div>
                  <div className="text-gray-600 text-[14px]">Infra Cost</div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="lg:w-1/2">
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/about_image.jpeg" 
                  alt="About IRIS WOODS" 
                  layout="fill" 
                  objectFit="cover" 
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Project Overview Section */}
      <motion.section
        className="py-20 bg-white relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
                {/* Full-width Background Image */}
        <div
          className="w-full h-[350px] bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/project-overview.jpeg')" }}
        >
          {/* Optional: Add overlay for better text contrast */}
          <div className="w-full h-full bg-[#0000004d]"></div>
        </div>

        {/* Content Overlapping the Background */}
        <div className="container mx-auto px-6 relative -mt-70 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#fff] mb-4">Project Overview</h2>
            <p className="text-[#e7f7fe] text-lg max-w-2xl mx-auto">
              Discover the key details of IRIS WOODS, your gateway to premium living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-25 gap-8">
            {/* Card 1 */}
            <div className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-white">
              <div className="p-8 text-center">
                <svg className="w-12 h-12 text-[#097199] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="font-bold text-[#097199] text-2xl mb-2">Builder</h3>
                <p className="text-gray-600 text-lg">Khanekar</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-white">
              <div className="p-8 text-center">
                <svg className="w-12 h-12 text-[#097199] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <h3 className="font-bold text-[#097199] text-2xl  mb-2">Strategic Partner</h3>
                <p className="text-gray-600 text-lg">Rising Spaces</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-white">
              <div className="p-8 text-center">
                <svg className="w-12 h-12 text-[#097199] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <h3 className="font-bold text-[#097199] text-2xl  mb-2">Project Size</h3>
                <p className="text-gray-600 text-lg">6 acres</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-white">
              <div className="p-8 text-center">
                <svg className="w-12 h-12 text-[#097199] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <h3 className="font-bold text-[#097199] text-2xl  mb-2">Total Plots</h3>
                <p className="text-gray-600 text-lg">52</p>
              </div>
            </div>
          </div>
        </div>

      </motion.section>

      {/* Why IRIS WOODS Section */}
      <motion.section id="why-iris" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#097199] mb-4">
              Why <span className="text-[#097199]">IRIS WOODS</span>?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the advantages that make IRIS WOODS your perfect choice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Benefit 1 */}
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-[#333434] mb-2">
                  Hinjewadi's nearest & largest gated community
                </h3>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-[#333434] mb-2">
                  Ideal for first-time homeowners
                </h3>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-[#333434] mb-2">
                  Seamless connectivity to Hinjewadi – PMC
                </h3>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-[#333434] mb-2">
                  Tamhini Ghat just 30 minutes away 🌿
                </h3>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-[#333434] mb-2">
                  Pune's largest metro station just 10 minutes away 🚇
                </h3>
              </div>
            </div>

            {/* Benefit 6 */}
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-[#333434] mb-2">
                  Developing infrastructure & amenities
                </h3>
              </div>
            </div>

            {/* Benefit 7 */}
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-[#333434] mb-2">
                  Megapolis Circle just 07 minutes away
                </h3>
              </div>
            </div>

            {/* Benefit 8 */}
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-[#333434] mb-2">
                  Daily essentials just 5 minutes away in Ghotawade
                </h3>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Amenities Section */}
      <motion.section id="amenities" className="relative py-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/amenities-bg.png')" }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">FACILITIES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto">
            {/* Row 1 */}
            

            <div
              className="relative  p-3 w-100 rounded-lg border border-white shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#fff] bg-opacity-60 rounded-lg pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-[#097199] flex justify-center items-center gap-x-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 21V3m4 18V3m4 18V3m4 18V3m4 18V3" />
                    <path d="M2 7h20M2 14h20" />
                  </svg>
                  <h3 className="font-semibold text-black text-base">ENTRANCE GATE</h3>
                </div>
              </div>
            </div>

            <div
              className="relative  p-3 w-100 rounded-lg border border-white shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#fff] bg-opacity-60 rounded-lg pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-[#097199] flex justify-center items-center gap-x-8">
                  <Image
                    src="/policeman.png"
                    alt="Security Icon"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <h3 className="font-semibold text-black text-base">24/7 SECURITY</h3>
                </div>
              </div>
            </div>

             <div
              className="relative  p-3 w-100 rounded-lg border border-white shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#fff] bg-opacity-60 rounded-lg pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-[#097199] flex justify-center items-center gap-x-4">
                  <Image
                    src="/plot.png"
                    alt="Security Icon"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <h3 className="font-semibold text-black text-base">INDIVISUAL PLOT COMPUND</h3>
                </div>
              </div>
            </div>

             <div
              className="relative  p-3 w-100 rounded-lg border border-white shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#fff] bg-opacity-60 rounded-lg pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-[#097199] flex justify-center items-center gap-x-6">
                   <Image
                    src="/road.png"
                    alt="Security Icon"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <h3 className="font-semibold text-black text-base">INTERNAL ROAD</h3>
                </div>
              </div>
            </div>

             <div
              className="relative  p-3 w-100 rounded-lg border border-white shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#fff] bg-opacity-60 rounded-lg pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-[#097199] flex justify-center items-center gap-x-18">
                  <Image
                    src="/transport.png"
                    alt="Security Icon"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <h3 className="font-semibold text-black text-base">WALK WAY</h3>
                </div>
              </div>
            </div>

             <div
              className="relative  p-3 w-100 rounded-lg border border-white shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#fff] bg-opacity-60 rounded-lg pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-[#097199] flex justify-center items-center gap-x-6">
                  <Image
                    src="/trees.png"
                    alt="Security Icon"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <h3 className="font-semibold text-black text-base">ROAD SIDE PLANTATION</h3>
                </div>
              </div>
            </div>

            <div
              className="relative  p-3 w-100 rounded-lg border border-white shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#fff] bg-opacity-60 rounded-lg pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-[#097199] flex justify-center items-center gap-x-6">
                  <Image
                    src="/electric.png"
                    alt="Security Icon"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <h3 className="font-semibold text-black text-base">WATER & ELECTRICITY PROVISION</h3>
                </div>
              </div>
            </div>

             <div
              className="relative  p-3 w-100 rounded-lg border border-white shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#fff] bg-opacity-60 rounded-lg pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-[#097199] flex justify-center items-center gap-x-6">
                  <Image
                    src="/info.png"
                    alt="Security Icon"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <h3 className="font-semibold text-black text-base">NAME BOARD</h3>
                </div>
              </div>
            </div>

             <div
              className="relative  p-3 w-100 rounded-lg border border-white shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#fff] bg-opacity-60 rounded-lg pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-[#097199] flex justify-center items-center gap-x-6">
                  <Image
                    src="/sewer.png"
                    alt="Security Icon"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <h3 className="font-semibold text-black text-base">DRAINAGE LINE</h3>
                </div>
              </div>
            </div>

             <div
              className="relative  p-3 w-100 rounded-lg border border-white shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#fff] bg-opacity-60 rounded-lg pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-[#097199] flex justify-center items-center gap-x-6">
                  <Image
                    src="/club.png"
                    alt="Security Icon"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <h3 className="font-semibold text-black text-base">GRAND CLUB HOUSE</h3>
                </div>
              </div>
            </div>

             <div
              className="relative  p-3 w-100 rounded-lg border border-white shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#fff] bg-opacity-60 rounded-lg pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-[#097199] flex justify-center items-center gap-x-6">
                  <Image
                    src="/street-light.png"
                    alt="Security Icon"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <h3 className="font-semibold text-black text-base">STREETS LAMP</h3>
                </div>
              </div>
            </div>

             <div
              className="relative  p-3 w-100 rounded-lg border border-white shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#fff] bg-opacity-60 rounded-lg pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-[#097199] flex justify-center items-center gap-x-6">
                  <Image
                    src="/table-tennis.png"
                    alt="Security Icon"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <h3 className="font-semibold text-black text-base">INDOOR GAMES</h3>
                </div>
              </div>
            </div>

             <div
              className="relative  p-3 w-100 rounded-lg border border-white shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#fff] bg-opacity-60 rounded-lg pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-[#097199] flex justify-center items-center gap-x-6">
                  <Image
                    src="/hall.png"
                    alt="Security Icon"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <h3 className="font-semibold text-black text-base">MULTYPURPOSE HALL</h3>
                </div>
              </div>
            </div>

             <div
              className="relative  p-3 w-100 rounded-lg border border-white shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#fff] bg-opacity-60 rounded-lg pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-[#097199] flex justify-center items-center gap-x-6">
                  <Image
                    src="/swimming.png"
                    alt="Security Icon"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <h3 className="font-semibold text-black text-base">SWIMMING POOL</h3>
                </div>
              </div>
            </div>

             <div
              className="relative  p-3 w-100 rounded-lg border border-white shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#fff] bg-opacity-60 rounded-lg pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-[#097199] flex justify-center items-center gap-x-6">
                  <Image
                    src="/game.png"
                    alt="Security Icon"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <h3 className="font-semibold text-black text-base">CHILDREN GARDEN</h3>
                </div>
              </div>
            </div>

             <div
              className="relative  p-3 w-100 rounded-lg border border-white shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#fff] bg-opacity-60 rounded-lg pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-[#097199] flex justify-center items-center gap-x-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 21V3m4 18V3m4 18V3m4 18V3m4 18V3" />
                    <path d="M2 7h20M2 14h20" />
                  </svg>
                  <h3 className="font-semibold text-black text-base">ENTRANCE GATE</h3>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section id="gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-[#097199] mb-12"
          >
            Gallery
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-64 rounded-lg overflow-hidden shadow-md"
              >
                <Image 
                  src={image} 
                  alt={`Gallery Image ${index + 1}`} 
                  layout="fill" 
                  objectFit="cover" 
                  className="hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Location Section */}
      <motion.section className="py-20 bg-[#097199] text-white">
          <div className="container mx-auto w-350 px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Strategically Located for Comfort & Growth
              </h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Prime location with excellent connectivity to all major destinations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {/* Metro Location */}
                <div className="flex items-center space-x-4">
                  <svg className="w-8 h-8 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Only 10 mins from Pune Metro
                    </h3>
                    <p className="text-blue-100">
                      Quick access to the city's transport network
                    </p>
                  </div>
                </div>

                {/* Nature Location */}
                <div className="flex items-center space-x-4">
                  <svg className="w-8 h-8 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      30 mins from Tamhini Ghat
                    </h3>
                    <p className="text-blue-100">
                      Nature's paradise for weekend getaways
                    </p>
                  </div>
                </div>

                {/* Essentials Location */}
                <div className="flex items-center space-x-4">
                  <svg className="w-8 h-8 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      5 mins from Ghotawade daily essentials
                    </h3>
                    <p className="text-blue-100">
                      All your daily needs within walking distance
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-white rounded-lg p-1 text-gray-900 shadow-lg">
                <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/map.png" 
                  alt="Location Map" 
                  layout="fill" 
                  objectFit="cover" 
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              </div>
            </div>
          </div>
      </motion.section>

      {/* Contact Us Section */}
      <motion.section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Dream Plot Today!
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Take the first step towards your dream home. Contact us now for
            site visits and exclusive offers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-[#3c3c3c] mb-4">Get in Touch</h3>
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                <svg className="w-6 h-6 text-[#097199]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xl text-[#3c3c3c]  font-semibold">
                  +91 83789 44777
                </span>
              </div>
              <p className="text-gray-600 mb-8">
                Our expert team is ready to assist you with site visits,
                documentation, and answer all your questions about IRIS WOODS.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Office Hours */}
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <svg className="w-8 h-8 text-[#097199] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-semibold mb-2 text-[#097199]">Office Hours</h4>
                <p className="text-gray-600 text-sm">
                  Mon - Sat: 9:00 AM - 7:00 PM
                </p>
              </div>

              {/* Location */}
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <svg className="w-8 h-8 text-[#097199] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 className="font-semibold mb-2 text-[#097199]">Location</h4>
                <p className="text-gray-600 text-sm">
                  Near Hinjewadi Phase III, Ghotawade
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="border-none shadow-lg rounded-lg">
            <div className="p-8">
              <h3 className="text-2xl text-[#3c3c3c]  font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#097199] h-12 placeholder:text-[#097199]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#097199] h-12 placeholder:text-[#097199]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#097199] h-12 placeholder:text-[#097199]"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#097199] placeholder:text-[#097199]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#097199] hover:bg-[#075a7a] text-white py-3 rounded-md text-lg transition h-12 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </motion.section>

      {/* Footer */}
      <motion.section className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Image 
              src="/logo.png" 
              alt="IRIS WOODS Logo" 
              width={150} 
              height={75} 
              className="h-16 w-auto"
            />
          </div>
          <p className="text-gray-400">© 2025 IRIS WOODS. All rights reserved.</p>
        </div>
      </motion.section>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
              <motion.div
                className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div> 
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-[#097199]">Enquire Now</h3>
                    <button 
                      onClick={() => setIsModalOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {isEnquiryFormSubmitted ? (
                    <div className="text-center py-8">
                      <svg className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                      <p className="text-gray-600">We have received your enquiry and will get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleEnquirySubmit}>
                      <div className="mb-4">
                        <label htmlFor="modal-name" className="block text-gray-700 mb-2">Name</label>
                        <input 
                          type="text" 
                          id="modal-name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#097199]"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="modal-email" className="block text-gray-700 mb-2">Email</label>
                        <input 
                          type="email" 
                          id="modal-email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#097199]"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="modal-phone" className="block text-gray-700 mb-2">Phone</label>
                        <input 
                          type="tel" 
                          id="modal-phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#097199]"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="modal-message" className="block text-gray-700 mb-2">Message</label>
                        <textarea 
                          id="modal-message" 
                          name="message" 
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#097199]"
                          required
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        className="w-full bg-[#097199] text-white py-3 rounded-md hover:bg-[#075a7a] transition"
                      >
                        Submit Enquiry
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
          </motion.div>

            )}
      </AnimatePresence>
    </div>
  );
}