'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

export function LocationSection() {
  // Animation variants
  const container : Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const item : Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6
      }
    }
  };

  const title : Variants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const mapAnimation : Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  const iconAnimation : Variants = {
    hidden: { scale: 0, rotate: -30 },
    show: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 8
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.section 
      className="py-16 md:py-20 bg-[#584f48] text-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          variants={title}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Strategically Located for Comfort & Growth
          </h2>
          <motion.p 
            className="text-blue-100 text-lg max-w-2xl mx-auto"
            variants={item}
          >
            Prime location with excellent connectivity to all major destinations
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            {/* Metro Location */}
            <motion.div className="flex items-start space-x-4" variants={item}>
              <motion.div variants={iconAnimation} whileHover="hover">
                <svg className="w-8 h-8 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Only 10 mins from Pune Metro</h3>
                <p className="text-blue-100">Quick access to the city's transport network</p>
              </div>
            </motion.div>

            {/* Nature Location */}
            <motion.div className="flex items-start space-x-4" variants={item}>
              <motion.div variants={iconAnimation} whileHover="hover">
                <svg className="w-8 h-8 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-1">30 mins from Tamhini Ghat</h3>
                <p className="text-blue-100">Nature's paradise for weekend getaways</p>
              </div>
            </motion.div>

            {/* Essentials Location */}
            <motion.div className="flex items-start space-x-4" variants={item}>
              <motion.div variants={iconAnimation} whileHover="hover">
                <svg className="w-8 h-8 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-1">5 mins from Ghotawade Road</h3>
                <p className="text-blue-100">All your daily needs within walking distance</p>
              </div>
            </motion.div>

            {/* Megapolis Circle Location - NEW */}
            <motion.div className="flex items-start space-x-4" variants={item}>
              <motion.div variants={iconAnimation} whileHover="hover">
                <svg className="w-8 h-8 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Megapolis Circle just 07 minutes away</h3>
                <p className="text-blue-100">For easy access to key roads and conveniences</p>
              </div>
            </motion.div>
          </div>


          {/* Map Section */}
          <motion.div 
            className="bg-white rounded-xl p-1 text-gray-900 shadow-xl"
            variants={mapAnimation}
            whileHover="hover"
          >
            <div className="relative h-80 sm:h-96 w-full rounded-lg overflow-hidden">
              <Image 
                src="/map.png" 
                alt="Location Map" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}