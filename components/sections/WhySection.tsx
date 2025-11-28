'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

export function WhySection() {
  // Animation variants
  const container : Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  const item : Variants= {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const icon : Variants = {
    hidden: { scale: 0 },
    show: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 8
      }
    }
  };

  return (
    <section id="why-iris" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2 variants={item} className="text-4xl font-bold text-[#097199] mb-4">
            Why <span className="text-[#097199]">Codename Tathastu </span>?
          </motion.h2>
          <motion.p variants={item} className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the advantages that make Codename Tathastu  your perfect choice
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
        >
          {/* Benefit 1 */}
          <motion.div 
            className="flex items-start space-x-4"
            variants={item}
            whileHover={{ 
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div variants={icon}>
              <img
                src="/icons/gate.png"
                alt="Gated Community Icon"
                className="w-9 h-9 mt-2 flex-shrink-0"
              />
            </motion.div>
            <div>
              <h3 className="font-semibold text-lg text-[#333434] mb-2">
                Hinjewadi's nearest & largest gated community.
              </h3>
            </div>
          </motion.div>

          {/* Benefit 2 */}
          <motion.div 
            className="flex items-start space-x-4"
            variants={item}
            whileHover={{ 
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div variants={icon}>
              <img
                src="/icons/family.png"
                alt="Family Icon"
                className="w-9 h-9 mt-2 flex-shrink-0"
              />
            </motion.div>
            <div>
              <h3 className="font-semibold text-lg text-[#333434] mb-2">
                Ideal for first-time homeowners.
              </h3>
            </div>
          </motion.div>

          {/* Benefit 3 */}
          <motion.div 
            className="flex items-start space-x-4"
            variants={item}
            whileHover={{ 
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div variants={icon}>
              <img
                src="/icons/map.png"
                alt="Map Icon"
                className="w-9 h-9 mt- flex-shrink-0"
              />
            </motion.div>
            <div>
              <h3 className="font-semibold text-lg text-[#333434] mb-2">
                Seamless connectivity to Hinjewadi – PMC.
              </h3>
            </div>
          </motion.div>

          {/* Benefit 4 */}
          <motion.div 
            className="flex items-start space-x-4"
            variants={item}
            whileHover={{ 
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div variants={icon}>
              <img
                src="/icons/mountain.png"
                alt="Mountain Icon"
                className="w-9 h-9 flex-shrink-0"
              />
            </motion.div>
            <div>
              <h3 className="font-semibold text-lg text-[#333434] mb-2">
                Tamhini Ghat just 30 minutes away. 🌿
              </h3>
            </div>
          </motion.div>

          {/* Benefit 5 */}
          <motion.div 
            className="flex items-start space-x-4"
            variants={item}
            whileHover={{ 
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div variants={icon}>
              <img
                src="/icons/subway.png"
                alt="Subway Icon"
                className="w-9 h-9 mt-2 flex-shrink-0"
              />
            </motion.div>
            <div>
              <h3 className="font-semibold text-lg text-[#333434] mb-2">
                Pune's largest metro station just 10 minutes away. 🚇
              </h3>
            </div>
          </motion.div>

          {/* Benefit 6 */}
          <motion.div 
            className="flex items-start space-x-4"
            variants={item}
            whileHover={{ 
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div variants={icon}>
              <img
                src="/icons/construction-site.png"
                alt="Construction Icon"
                className="w-9 h-9 flex-shrink-0"
              />
            </motion.div>
            <div>
              <h3 className="font-semibold text-lg text-[#333434] mb-2">
                Developing infrastructure & amenities.
              </h3>
            </div>
          </motion.div>

          {/* Benefit 7 */}
          <motion.div 
            className="flex items-start space-x-4"
            variants={item}
            whileHover={{ 
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div variants={icon}>
              <img
                src="/icons/location.png"
                alt="Location Icon"
                className="w-9 h-9 flex-shrink-0"
              />
            </motion.div>
            <div>
              <h3 className="font-semibold text-lg text-[#333434] mb-2">
                Megapolis Circle just 07 minutes away.
              </h3>
            </div>
          </motion.div>

          {/* Benefit 8 */}
          <motion.div 
            className="flex items-start space-x-4"
            variants={item}
            whileHover={{ 
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div variants={icon}>
              <img
                src="/icons/store.png"
                alt="Store Icon"
                className="w-9 h-9 flex-shrink-0"
              />
            </motion.div>
            <div>
              <h3 className="font-semibold text-lg text-[#333434] mb-2">
                Daily essentials just 5 minutes away in Ghotawade.
              </h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}