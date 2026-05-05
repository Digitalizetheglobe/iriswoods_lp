'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { div } from 'framer-motion/client';

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
      className="relative w-full h-[700px] sm:h-[600px] md:h-[450px] lg:h-[750px] xl:h-[820px] overflow-hidden"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Desktop */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/banner_w.png"
          alt="Hero banner desktop"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* add  */}

      {/* Tablet */}
      <div className="hidden sm:block md:hidden absolute inset-0">
        <Image
          src="/banner_t.png"
          alt="Hero banner tablet"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Mobile */}
      <div className="sm:hidden absolute inset-0">
        <Image
          src="/banner_m.png"
          alt="Hero banner mobile"
          fill
          className="object-cover"
          priority
        />
      </div>
    </motion.section>
  );
}
