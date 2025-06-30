'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

export function HeroSection() {
  // Animation variants
  const container : Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="home" 
      className="relative"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="h-screen max-h-[800px] w-full">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image 
            src="/banner.png" 
            alt="IRIS WOODS Banner" 
            fill
            priority
            quality={100}
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Tablet Image */}
        <div className="hidden sm:block md:hidden">
          <Image 
            src="/images/tab_banner.png" 
            alt="IRIS WOODS Tablet Banner" 
            fill
            priority
            quality={100}
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Mobile Image */}
        <div className="sm:hidden">
          <Image 
            src="/images/phone_banner.png" 
            alt="IRIS WOODS Mobile Banner" 
            fill
            priority
            quality={100}
            className="object-cover"
            sizes="100vw"
          />
        </div>

        
      </div>
    </motion.section>
  );
}