'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

export function AmenitiesSection() {
  // Animation variants
  const container : Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const item : Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const title : Variants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const background : Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const amenities = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 21V3m4 18V3m4 18V3m4 18V3m4 18V3" />
          <path d="M2 7h20M2 14h20" />
        </svg>
      ),
      title: "ENTRANCE GATE"
    },
    {
      icon: <Image src="/policeman.png" alt="Security" width={30} height={30} className="object-contain" />,
      title: "24/7 SECURITY"
    },
    {
      icon: <Image src="/plot.png" alt="Plot" width={30} height={30} className="object-contain" />,
      title: "INDIVIDUAL PLOT COMPOUND"
    },
    {
      icon: <Image src="/road.png" alt="Road" width={30} height={30} className="object-contain" />,
      title: "INTERNAL ROAD"
    },
    {
      icon: <Image src="/transport.png" alt="Walkway" width={30} height={30} className="object-contain" />,
      title: "WALK WAY"
    },
    {
      icon: <Image src="/trees.png" alt="Plantation" width={30} height={30} className="object-contain" />,
      title: "ROAD SIDE PLANTATION"
    },
    {
      icon: <Image src="/electric.png" alt="Utilities" width={30} height={30} className="object-contain" />,
      title: "WATER & ELECTRICITY"
    },
    {
      icon: <Image src="/info.png" alt="Signage" width={30} height={30} className="object-contain" />,
      title: "NAME BOARD"
    },
    {
      icon: <Image src="/sewer.png" alt="Drainage" width={30} height={30} className="object-contain" />,
      title: "DRAINAGE LINE"
    },
    {
      icon: <Image src="/club.png" alt="Clubhouse" width={30} height={30} className="object-contain" />,
      title: "GRAND CLUB HOUSE"
    },
    {
      icon: <Image src="/street-light.png" alt="Lighting" width={30} height={30} className="object-contain" />,
      title: "STREET LAMPS"
    },
    {
      icon: <Image src="/table-tennis.png" alt="Games" width={30} height={30} className="object-contain" />,
      title: "INDOOR GAMES"
    },
    {
      icon: <Image src="/hall.png" alt="Hall" width={30} height={30} className="object-contain" />,
      title: "MULTIPURPOSE HALL"
    },
    {
      icon: <Image src="/swimming.png" alt="Pool" width={30} height={30} className="object-contain" />,
      title: "SWIMMING POOL"
    },
    {
      icon: <Image src="/game.png" alt="Playground" width={30} height={30} className="object-contain" />,
      title: "CHILDREN'S GARDEN"
    }
  ];

  return (
    <section id="amenities" className="relative py-16 md:py-20">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/amenities-bg.png')" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={background}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={title}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">FACILITIES</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              className="relative p-3 w-full rounded-lg border border-white shadow-md hover:shadow-lg transition-all duration-300"
              variants={item}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
            >
              <div className="absolute inset-0 bg-white bg-opacity-60 rounded-lg pointer-events-none" />
              
              <div className="relative z-10 text-center">
                <div className="text-[#097199] flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    {amenity.icon}
                  </div>
                  <h3 className="font-semibold text-black text-sm sm:text-base">
                    {amenity.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}