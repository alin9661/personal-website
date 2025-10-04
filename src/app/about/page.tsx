'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Carousel3D from '@/components/Carousel3D';

export default function About() {
  const placeholderImages = [
    'https://picsum.photos/400/400?random=1',
    'https://picsum.photos/400/400?random=2',
    'https://picsum.photos/400/400?random=3',
    'https://picsum.photos/400/400?random=4',
    'https://picsum.photos/400/400?random=5',
    'https://picsum.photos/400/400?random=6',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-16"
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Me Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold">Who I Am</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                Hey, I&apos;m Aaron! I&apos;m born and raised in New York City, growing up I
                loved reading astronomy books which grew my love for Physics and Math.
                I started programming during my freshman year of college writing simulations
                for spring dampening where I decided to change to double major in
                Computer Science and Mathematics/Statistics.


              </p>
              <p>
                During this time I also found an interest for trading Options
                I&apos;m currently doing my masters at NYU in Computer Engineering

              </p>
              <p>
                I am a passionate Software Developer with a deep interest in financial markets,
                Large Language Models, and artificial intelligence. My journey began with a fascination for
                options volatility during the GameStop short squeeze.
              </p>
              <p>
                As a Python Developer, I specialize in building robust applications for data
                processing, machine learning, and automated trading systems. I believe in writing
                clean, efficient code that solves real-world problems.
              </p>
              <p>
                Outside of technical details, I love to spend my free time weightlifting, reading books,
                and during the winters I love snowboarding (Looking forward to getting the Ikon Pass 2025).
              </p>
              <p>
                My enthusiasm for cryptocurrency stems from its potential to revolutionize
                traditional financial systems. I&apos;m constantly exploring new developments in
                blockchain technology and decentralized finance.
              </p>
            </div>
          </motion.div>

          {/* Hobbies & Travels 3D Carousel */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-center">Hobbies & Travels</h2>
            <div className="flex justify-center">
              <Carousel3D
                images={placeholderImages}
                width={180}
                height={180}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
