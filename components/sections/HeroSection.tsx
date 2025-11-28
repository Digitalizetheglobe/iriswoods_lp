'use client';

import { motion, Variants } from 'framer-motion';

export function HeroSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id="home"
      className="relative w-full h-[400px] sm:h-[500px] md:h-[450px] lg:h-[700px] xl:h-[800px] overflow-hidden"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Desktop */}
      <div className="hidden md:block absolute inset-0">
        <video
          src="/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tablet */}
      <div className="hidden sm:block md:hidden absolute inset-0">
        <video
          src="/tab_banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile */}
      <div className="sm:hidden absolute inset-0">
        <video
          src="/tab_banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </motion.section>
  );
}
