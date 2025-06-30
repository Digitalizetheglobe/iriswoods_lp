'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

export function GallerySection() {
  // Manually define your gallery images
  const galleryImages = [
    {
      src: '/images/children-play.jpeg',
      alt: 'Gallery Image 1',
      title: 'CHILDRENS GARDEN'
    },
    {
      src: '/images/garden-2.jpg',
      alt: 'Gallery Image 2',
      title: 'Garden'
    },
    {
      src: '/images/garden.jpeg',
      alt: 'Gallery Image 3',
      title: 'Garden'
    },
    {
      src: '/images/park.jpg',
      alt: 'Gallery Image 4',
      title: 'CHILDRENS GARDEN'
    },
    {
      src: '/images/road-side.jpeg',
      alt: 'Gallery Image 5',
      title: 'ROAD SIDE PLANTATION'
    },
    {
      src: '/images/street.jpeg',
      alt: 'Gallery Image 6',
      title: 'Street Lights'
    }
  ];

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
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  const title: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
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

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={container}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={item}
              custom={index}
              className="relative h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-lg"
              whileHover="hover"
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
  );
}
