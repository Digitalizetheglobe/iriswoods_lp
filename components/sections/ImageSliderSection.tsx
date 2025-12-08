'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ImageSliderSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 10 dummy images - user will replace these manually with their own images
  // Example: '/images/slider/image1.jpg', '/images/slider/image2.jpg', etc.
  const images = [
    '/images/client/client1.jpg',
    '/images/client/client2.jpg',
    '/images/client/client3.jpg',
    '/images/client/client4.jpg',
    '/images/client/client5.jpg',
    '/images/client/client6.jpg',
    '/images/client/client7.jpg',
    '/images/client/client8.jpg',
    '/images/client/client9.jpg',
    '/images/client/client10.jpg',

  ];

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-gray-50" id="image-slider">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#584f48] mb-4">
            Image Gallery
          </h2>
        </div>

        {/* Slider Container */}
        <div 
          className="relative overflow-hidden w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="slider-container">
            <div className={`slider-track ${isHovered ? 'paused' : ''}`}>
              {/* First set of images */}
              {images.map((img, index) => (
                <div
                  key={`first-${index}`}
                  className="slider-item"
                  onClick={() => handleImageClick(img)}
                >
                  <Image
                    src={img}
                    alt={`Gallery Image ${index + 1}`}
                    width={300}
                    height={200}
                    className="w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {images.map((img, index) => (
                <div
                  key={`second-${index}`}
                  className="slider-item"
                  onClick={() => handleImageClick(img)}
                >
                  <Image
                    src={img}
                    alt={`Gallery Image ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-contain  cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-gray-300 cursor-pointer z-10"
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Full Size Image"
              width={1200}
              height={800}
              className="rounded-lg shadow-2xl w-full h-auto max-h-[90vh] object-contain cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .slider-track {
          display: flex;
          width: fit-content;
          animation: slide 100s linear infinite;
        }

        .slider-track.paused {
          animation-play-state: paused;
        }

        .slider-item {
          flex-shrink: 0;
          width: 300px;
          height: 300px;
          margin-right: 1rem;
          position: relative;
          overflow: hidden;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (min-width: 640px) {
          .slider-item {
            width: 400px;
            height: 500px;
          }
        }

        @media (min-width: 1024px) {
          .slider-item {
            width: 500px;
            height: 600px;
          }
        }
      `}</style>
    </section>
  );
}

