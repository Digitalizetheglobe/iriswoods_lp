'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Animation variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const formItem: Variants = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const iconHover = {
    scale: 1.1,
    transition: { duration: 0.2 }
  };

  const buttonHover = {
    scale: 1.02,
    boxShadow: "0 5px 15px rgba(9, 113, 153, 0.3)",
    transition: { duration: 0.3 }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const cleanedValue = value.replace(/\D/g, '');
      if (cleanedValue.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: cleanedValue }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      alert('Please fill in all the fields.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert('Phone number must be exactly 10 digits.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to send. Check your internet or try again later.');
    }
  };

  return (
    <motion.section
      id="contact"
      className="bg-[#f3f3f3] py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <motion.div className="mt-6" variants={container}>
          <motion.h2 className="text-3xl font-bold text-[#097199] mb-4" variants={item}>
            Get In Touch
          </motion.h2>
          <motion.p className="text-gray-600 mb-8" variants={item}>
            We'd love to hear from you. Reach out with any questions or inquiries.
          </motion.p>

          <motion.div className="space-y-6 mb-6" variants={container}>
            {[
              {
                icon: <FaMapMarkerAlt />,
                title: 'Address',
                text: 'Near Hinjewadi Phase III, Ghotawade - 410205'
              },
              {
                icon: <FaPhoneAlt />,
                title: 'Phone Number',
                text: '+91 83789 44777'
              },
              {
                icon: <FaEnvelope />,
                title: 'E-Mail',
                text: 'info@risingspaces.in'
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                variants={item}
                whileHover={{ x: 5 }}
              >
                <motion.div className="bg-[#097199] p-3 rounded-full text-white" whileHover={iconHover}>
                  {contact.icon}
                </motion.div>
                <div>
                  <h4 className="font-bold text-[#1d1d1d]">{contact.title}</h4>
                  <p className="text-gray-600 text-sm">{contact.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item}>
            <h4 className="font-bold text-[#1d1d1d] mb-2">Follow Us:</h4>
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaYoutube, FaInstagram].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="w-10 h-10 rounded-full bg-[#097199] flex items-center justify-center text-white hover:opacity-80 cursor-pointer"
                  whileHover={iconHover}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-md"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h3 className="text-3xl font-bold text-[#097199] mb-6" variants={item}>
            Send a Message
          </motion.h3>

          <form onSubmit={handleContactSubmit} className="space-y-5">
            {isSubmitted && (
              <motion.div
                className="text-green-600 text-sm mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Thank you! Your message has been sent.
              </motion.div>
            )}

            <motion.div variants={formItem}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full border-b border-gray-300 focus:outline-none placeholder:text-gray-400 py-2 text-[#097199] focus:border-[#097199] transition-colors"
              />
            </motion.div>

            <motion.div variants={formItem}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                maxLength={10}
                className="w-full border-b border-gray-300 focus:outline-none placeholder:text-gray-400 py-2 text-[#097199] focus:border-[#097199] transition-colors"
              />
            </motion.div>

            <motion.div variants={formItem}>
              <input
                type="email"
                name="email"
                placeholder="E-mail address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border-b border-gray-300 focus:outline-none placeholder:text-gray-400 py-2 text-[#097199] focus:border-[#097199] transition-colors"
              />
            </motion.div>

            <motion.div variants={formItem}>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                required
                className="w-full border-b border-gray-300 focus:outline-none placeholder:text-gray-400 py-2 text-[#097199] focus:border-[#097199] transition-colors"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-[#097199] hover:bg-[#232424] text-white py-3 rounded-md text-sm font-semibold transition"
              whileHover={buttonHover}
              whileTap={{ scale: 0.98 }}
              variants={formItem}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
