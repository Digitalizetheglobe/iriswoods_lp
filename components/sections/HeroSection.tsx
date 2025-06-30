'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

import BannerDesktop from '../../public/images/Banner.png';
import BannerTablet from '../../public/images/tab_banner.png';
import BannerMobile from '../../public/images/phone_banner.png';

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
      className="relative w-screen h-[600px] overflow-hidden"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Desktop */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src={BannerDesktop}
          alt="Desktop Banner"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Tablet */}
      <div className="hidden sm:block md:hidden absolute inset-0">
        <Image
          src={BannerTablet}
          alt="Tablet Banner"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Mobile */}
      <div className="sm:hidden absolute inset-0">
        <Image
          src={BannerMobile}
          alt="Mobile Banner"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </motion.section>
  );
}
