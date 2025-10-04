'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [rotation, setRotation] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);

  const radius = width * 1.4; // Increased radius for better spacing with 10 images
  const angleStep = (2 * Math.PI) / images.length;

  useEffect(() => {
    let lastTime = 0;
    const rotationSpeed = 0.3; // degrees per millisecond for continuous rotation

    const animate = (currentTime: number) => {
      if (!isAutoRotating) return;

      if (lastTime === 0) lastTime = currentTime;
      const deltaTime = currentTime - lastTime;

      setRotation(prev => {
        const newRotation = prev + (rotationSpeed * deltaTime);
        // Update current index based on rotation
        const newIndex = Math.floor(((newRotation % 360) / 360) * images.length);
        setCurrentIndex(newIndex);
        return newRotation;
      });

      lastTime = currentTime;
      animationRef.current = requestAnimationFrame(animate);
    };

    if (isAutoRotating) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAutoRotating, images.length]);

  const handleImageClick = (index: number) => {
    const targetRotation = -index * angleStep * (180 / Math.PI);
    setRotation(targetRotation);
    setCurrentIndex(index);
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 6000);
  };

  const handleImageHover = (index: number | null) => {
    setHoveredIndex(index);
    if (index !== null) {
      setIsAutoRotating(false);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setTimeout(() => setIsAutoRotating(true), 1000);
  };

  return (
    <div
      className="relative mx-auto"
      style={{
        width: width * 3.5, // Larger container for 10 images
        height: height * 3.5,
        perspective: '1500px' // Deeper perspective for better 3D effect
      }}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotation}deg)`,
        }}
      >
        {images.map((image, index) => {
          const angle = index * angleStep;
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius;
          const rotateY = angle * (180 / Math.PI);

          // Calculate distance from camera for depth-based scaling
          const distanceFromCamera = Math.abs(z);
          const baseScale = Math.max(0.5, 1 - (distanceFromCamera / radius) * 0.5);
          const opacity = Math.max(0.3, 1 - (distanceFromCamera / radius) * 0.7);

          // Enhanced hover effect - image pops out significantly
          const isHovered = hoveredIndex === index;
          const hoverScale = isHovered ? baseScale * 1.8 : baseScale;
          const hoverZ = isHovered ? z + 150 : z; // Move closer to camera
          const hoverOpacity = isHovered ? 1 : opacity;

          return (
            <motion.div
              key={index}
              className="absolute cursor-pointer"
              style={{
                left: '50%',
                top: '50%',
                width: width,
                height: height,
                transformStyle: 'preserve-3d',
                zIndex: isHovered ? 1000 : Math.round((radius - distanceFromCamera) * 10),
              }}
              animate={{
                x: x,
                z: hoverZ,
                scale: hoverScale,
                opacity: hoverOpacity,
                rotateY: rotateY,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.4
              }}
              onClick={() => handleImageClick(index)}
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={() => handleImageHover(null)}
            >
              <div
                className={`
                  relative w-full h-full rounded-xl overflow-hidden shadow-2xl
                  ${isHovered
                    ? 'ring-4 ring-yellow-400 ring-opacity-90 shadow-yellow-500/60'
                    : index === currentIndex
                    ? 'ring-4 ring-blue-400 ring-opacity-80 shadow-blue-500/50'
                    : 'ring-2 ring-white ring-opacity-20'
                  }
                `}
                style={{
                  filter: isHovered
                    ? 'brightness(1.4) saturate(1.3) contrast(1.1)'
                    : index === currentIndex
                    ? 'brightness(1.3) saturate(1.2)'
                    : 'brightness(0.85) saturate(0.9)',
                  transition: 'all 0.4s ease',
                  boxShadow: isHovered
                    ? '0 30px 60px -15px rgba(255, 193, 7, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                    : index === currentIndex
                    ? '0 25px 50px -12px rgba(59, 130, 246, 0.5)'
                    : '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                }}
              >
                <Image
                  src={image}
                  alt={`Carousel image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes={`${width}px`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Enhanced Navigation dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${index === currentIndex
                ? 'bg-blue-400 shadow-lg shadow-blue-400/50'
                : 'bg-white bg-opacity-40 hover:bg-opacity-70 border border-white/30'
              }
            `}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Enhanced Navigation arrows */}
      <motion.button
        onClick={() => handleImageClick((currentIndex - 1 + images.length) % images.length)}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/20 backdrop-blur-sm hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20 border border-white/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-xl">‹</span>
      </motion.button>
      <motion.button
        onClick={() => handleImageClick((currentIndex + 1) % images.length)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/20 backdrop-blur-sm hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20 border border-white/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-xl">›</span>
      </motion.button>

      {/* Rotation indicator */}
      <div className="absolute top-4 right-4 z-20">
        <motion.div
          className="w-8 h-8 border-2 border-white/30 rounded-full flex items-center justify-center"
          animate={{
            rotate: isAutoRotating ? 360 : 0
          }}
          transition={{
            duration: 4,
            repeat: isAutoRotating ? Infinity : 0,
            ease: "linear"
          }}
        >
          <div className="w-2 h-2 bg-blue-400 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}