'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

export function GallerySection() {
  const galleryImages = [
    { src: '/images/gallery/children-play.jpeg', alt: 'Gallery Image 1', title: 'CHILDRENS GARDEN' },
    { src: '/images/gallery/Childrens-Play-Area.jpg', alt: 'Gallery Image 2', title: 'CHILDRENS GARDEN' },
    { src: '/images/gallery/Garden-With-Sitting-area.jpg', alt: 'Gallery Image 3', title: 'Garden' },
    { src: '/images/gallery/garden.jpeg', alt: 'Gallery Image 4', title: 'Garden' },
    { src: '/images/gallery/MIDC-Takwe.jpg', alt: 'Gallery Image 5', title: 'MIDC Takeway' },
    { src: '/images/gallery/Pune-Mumbai-Highway.jpg', alt: 'Gallery Image 6', title: 'Pune MUmbai Highway' },
    { src: '/images/gallery/road-side.jpeg', alt: 'Gallery Image 7', title: 'ROAD SIDE PLANTATION' },
    { src: '/images/gallery/street.jpeg', alt: 'Gallery Image 8', title: 'Street Lamp' },
    { src: '/images/gallery/04.png', alt: 'Rising', title: 'Rising' },
    { src: '/images/gallery/05.png', alt: 'Rising', title: 'Rising' },
    { src: '/images/gallery/06.png', alt: 'Rising', title: 'Rising' },
    { src: '/images/gallery/07.png', alt: 'Rising', title: 'Rising' },
    { src: '/images/gallery/08.png', alt: 'Rising', title: 'Rising' },
    { src: '/images/gallery/09.png', alt: 'Rising', title: 'Rising' },
    { src: '/images/gallery/10.png', alt: 'Rising', title: 'Rising' },


  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const goLeft = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goRight = () => {
    setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: 'beforeChildren'
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10, duration: 0.5 } },
    hover: { scale: 1.02, transition: { duration: 0.3, ease: 'easeOut' } }
  };

  const title: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <>
      <motion.section
        id="gallery"
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        variants={container}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            variants={title}
            className="text-3xl md:text-4xl font-bold text-center text-[#097199] mb-8 md:mb-12"
          >
            Gallery
          </motion.h2>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" variants={container}>
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                whileHover="hover"
                onClick={() => openModal(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {image.title && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <h3 className="text-white font-medium text-lg">{image.title}</h3>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl h-[70vh]">
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl z-10 cursor-pointer"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            {/* Left Arrow */}
            <button
              onClick={goLeft}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl z-10 cursor-pointer"
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>

            {/* ✅ Image MUST be inside a relative container */}
            <div className="relative w-full h-full">
              <Image
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                fill
                className="object-contain rounded-xl"
                sizes="100vw"
                priority
              />
            </div>

            {/* Right Arrow */}
            <button
              onClick={goRight}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl z-10 cursor-pointer"
              aria-label="Next"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}


    </>
  );
}
