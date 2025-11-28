'use client';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

export function ProjectOverview() {
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

  const item  : Variants= {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  const cardItem : Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5
      }
    })
  };

  const backgroundImage : Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Image */}
      <motion.div
        className="w-full h-[350px] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/project-overview.jpeg')" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={backgroundImage}
      >
        <div className="w-full h-full bg-[#0000004d]"></div>
      </motion.div>

      {/* Content Overlapping the Background */}
      <div className="container mx-auto px-6 relative -mt-70 z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2 variants={item} className="text-4xl font-bold text-[#fff] mb-4">
            Project Overview
          </motion.h2>
          <motion.p variants={item} className="text-[#e7f7fe] text-lg max-w-2xl mx-auto">
            Discover the key details of Codename Tathastu, your gateway to premium living
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-25 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
        >
          {/* Card 1 */}
          <motion.div 
            className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-white"
            variants={cardItem}
            custom={0}
            whileHover={{ 
              y: -10,
              boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
            }}
          >
            <div className="p-8 text-center">
              <svg className="w-12 h-12 text-[#097199] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="font-bold text-[#097199] text-2xl mb-2">Builder</h3>
              <p className="text-gray-600 text-lg">Khanekar</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-white"
            variants={cardItem}
            custom={1}
            whileHover={{ 
              y: -10,
              boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
            }}
          >
            <div className="p-8 text-center">
              <svg className="w-12 h-12 text-[#097199] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3 className="font-bold text-[#097199] text-2xl  mb-2">Strategic Partner</h3>
              <p className="text-gray-600 text-lg">Rising Spaces</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-white"
            variants={cardItem}
            custom={2}
            whileHover={{ 
              y: -10,
              boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
            }}
          >
            <div className="p-8 text-center">
              <svg className="w-12 h-12 text-[#097199] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <h3 className="font-bold text-[#097199] text-2xl  mb-2">Project Size</h3>
              <p className="text-gray-600 text-lg">6 Acres</p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-white"
            variants={cardItem}
            custom={3}
            whileHover={{ 
              y: -10,
              boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
            }}
          >
            <div className="p-8 text-center">
              <svg className="w-12 h-12 text-[#097199] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <h3 className="font-bold text-[#097199] text-2xl  mb-2">Total Plots</h3>
              <p className="text-gray-600 text-lg">52</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}