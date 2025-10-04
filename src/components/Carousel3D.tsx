'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Carousel3DProps {
  images: string[];
  width?: number;
  height?: number;
}

export default function Carousel3D({ images, width = 200, height = 200 }: Carousel3DProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const radius = width * 0.8;
  const angleStep = (2 * Math.PI) / images.length;

  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoRotating, images.length]);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 5000);
  };

  return (
    <div
      className="relative mx-auto"
      style={{
        width: width * 2.5,
        height: height * 2.5,
        perspective: '1000px'
      }}
      onMouseEnter={() => setIsAutoRotating(false)}
      onMouseLeave={() => setIsAutoRotating(true)}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${-currentIndex * angleStep * (180 / Math.PI)}deg)`,
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {images.map((image, index) => {
          const angle = index * angleStep;
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius;
          const rotateY = angle * (180 / Math.PI);

          return (
            <motion.div
              key={index}
              className="absolute cursor-pointer"
              style={{
                left: '50%',
                top: '50%',
                width: width,
                height: height,
                transform: `
                  translate(-50%, -50%)
                  translate3d(${x}px, 0, ${z}px)
                  rotateY(${rotateY}deg)
                `,
                transformStyle: 'preserve-3d',
              }}
              onClick={() => handleImageClick(index)}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              <div
                className={`
                  relative w-full h-full rounded-lg overflow-hidden shadow-lg
                  ${index === currentIndex ? 'ring-4 ring-white ring-opacity-50' : ''}
                `}
                style={{
                  filter: index === currentIndex ? 'brightness(1.2)' : 'brightness(0.8)',
                  transition: 'filter 0.3s ease',
                }}
              >
                <Image
                  src={image}
                  alt={`Carousel image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes={`${width}px`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-200
              ${index === currentIndex
                ? 'bg-white scale-110'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }
            `}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => handleImageClick((currentIndex - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center text-white transition-all duration-200 z-10"
      >
        ←
      </button>
      <button
        onClick={() => handleImageClick((currentIndex + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center text-white transition-all duration-200 z-10"
      >
        →
      </button>
    </div>
  );
}