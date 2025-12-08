'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AboutSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  };

  const statItem = {
    hidden: { opacity: 0, y: 10 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="about" className="pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {/* Text Section */}
          <div className="lg:w-1/2 w-full">
            <motion.h1 variants={item} className="text-3xl sm:text-4xl font-bold text-[#584f48] mb-6">
              About Codename Tathastu
            </motion.h1>
            
            <motion.div variants={container} className="text-gray-700 space-y-4 text-base sm:text-[17px]">
              <motion.p variants={item}>
                We are a global, boutique real estate brokerage offering premium NA residential plots near Hinjewadi Phase III, Ghotawade.
              </motion.p>
              <motion.p variants={item}>
                Experience city life with a refreshing twist at Codename Tathastu, where extra oxygen and lush greenery await you! Exciting new residential NA plots are launching soon near Hinjewadi Phase III, Ghotawade, offering the perfect blend of urban convenience and natural tranquility. Build your dream home in this vibrant, eco-friendly community!
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"
              variants={container}
            >
              {[
                { value: '1886-9686', label: 'Plot Sizes (Sq. Ft.)' },
                { value: '₹3500', label: 'Rate per Sq. Ft.' },
                { value: '₹2,99,000', label: 'Infra Cost' }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-[#fff] p-6 rounded-lg text-center border border-[#584f48]"
                  variants={statItem}
                  custom={index}
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                >
                  <div className="text-xl font-bold text-[#584f48] mb-2">{item.value}</div>
                  <div className="text-gray-600 text-sm">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div 
            className="lg:w-1/2 w-full"
            variants={imageAnimation}
          >
            <div className="relative h-66 sm:h-80 md:h-140 w-full rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/about_banner.jpg" 
                alt="About Codename Tathastu" 
                fill
                className="object-cover  transition-transform duration-300"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
