'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaTimes, FaSearchPlus } from 'react-icons/fa';

const sitePhotos = [
  '/newone/Tathastu Ongoing Site Photos_1.jpg',
  '/newone/Tathastu Ongoing Site Photos_2.jpg',
  '/newone/Tathastu Ongoing Site Photos_3.jpg',
  '/newone/Tathastu Ongoing Site Photos_4.jpg',
  '/newone/Tathastu Ongoing Site Photos_5.jpg',
  '/newone/Tathastu Ongoing Site Photos_6.jpg',
  '/newone/Tathastu Ongoing Site Photos_7.jpg',
  '/newone/Tathastu Ongoing Site Photos_8.jpg',
  '/newone/Tathastu Ongoing Site Photos_9.jpg',
  '/newone/Tathastu Ongoing Site Photos_10.jpg',
  '/newone/Tathastu Ongoing Site Photos_11.jpg',
  '/newone/Tathastu Ongoing Site Photos_12.jpg',
  '/newone/Tathastu Ongoing Site Photos_13.jpg',
  '/newone/Tathastu Ongoing Site Photos_14.jpg',
  '/newone/Tathastu Ongoing Site Photos_15.jpg',
];

export function SitePhotosSection() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; index: number } | null>(null);

  const openLightbox = (index: number) => {
    setLightbox({ isOpen: true, index });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = 'unset';
  }, []);

  const goLeft = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightbox((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        index: prev.index === 0 ? sitePhotos.length - 1 : prev.index - 1,
      };
    });
  }, []);

  const goRight = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightbox((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        index: (prev.index + 1) % sitePhotos.length,
      };
    });
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightbox || !lightbox.isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        goRight();
      } else if (e.key === 'ArrowLeft') {
        goLeft();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox, closeLightbox, goLeft, goRight]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, sitePhotos.length));
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12, duration: 0.4 },
    },
  };

  return (
    <section id="site-photos" className="py-16 bg-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#584f48]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#584f48]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#584f48] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3"
          >
            Trust & Celebration
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4"
          >
            Recent <span className="text-[#584f48]">Bookings</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg"
          >
            Celebrating the moments of trust and joy as families secure their dream NA plots at Codename Tathastu.
          </motion.p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sitePhotos.slice(0, visibleCount).map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, duration: 0.4, delay: (index % 3) * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-gray-100 bg-gray-50"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={src}
                alt={`Booking ceremony ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={75}
              />
              
              {/* Glassmorphic hover overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white/90 p-3 rounded-full text-[#584f48] shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <FaSearchPlus className="w-5 h-5 animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < sitePhotos.length && (
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLoadMore}
              className="px-8 py-3.5 bg-white border-2 border-[#584f48] text-[#584f48] hover:bg-[#584f48] hover:text-white rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-sm cursor-pointer"
            >
              Load More
            </motion.button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm cursor-pointer"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/80 hover:text-white transition-colors duration-200 z-50 bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-md cursor-pointer border border-white/10"
              aria-label="Close lightbox"
            >
              <FaTimes className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Left navigation */}
            <button
              onClick={goLeft}
              className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors duration-200 z-50 bg-white/10 hover:bg-white/20 rounded-full p-4 backdrop-blur-md cursor-pointer border border-white/10"
              aria-label="Previous image"
            >
              <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Right navigation */}
            <button
              onClick={goRight}
              className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors duration-200 z-50 bg-white/10 hover:bg-white/20 rounded-full p-4 backdrop-blur-md cursor-pointer border border-white/10"
              aria-label="Next image"
            >
              <FaChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Image display container */}
            <div
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={sitePhotos[lightbox.index]}
                  alt={`Booking ceremony ${lightbox.index + 1}`}
                  fill
                  className="object-contain rounded-lg select-none"
                  sizes="100vw"
                  priority
                  quality={90}
                />
              </div>

              {/* Index indicator */}
              <div className="absolute bottom-[-45px] left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border border-white/15 shadow-xl select-none">
                <span className="text-[#e2d5c3] font-bold">{lightbox.index + 1}</span>
                <span className="mx-2 text-white/40">/</span>
                <span className="text-white/70">{sitePhotos.length}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
