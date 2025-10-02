'use client';

import { motion } from 'framer-motion';
import TypingAnimation from '@/components/TypingAnimation';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* <Scene3D /> */}
      <div className="z-10 text-center px-4">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-4 text-neutral-100"
        >
          Aaron Lin
        </motion.h1>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <TypingAnimation
            texts={[
              "Software Developer",
              "Financial Enthusiast",
              "Builder"
            ]}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
