import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  className?: string;
  count?: number;
  height?: string;
  width?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  className = '', 
  count = 1,
  height = '1rem',
  width = '100%'
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className={`bg-terminal-green/10 rounded animate-pulse ${className}`}
          style={{ height, width }}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.1
          }}
        />
      ))}
    </>
  );
};

export const ProjectCardSkeleton: React.FC = () => {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-button terminal-button-red"></div>
        <div className="terminal-button terminal-button-yellow"></div>
        <div className="terminal-button terminal-button-green"></div>
        <SkeletonLoader width="200px" height="0.875rem" className="ml-2" />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <SkeletonLoader width="60%" height="1.25rem" />
          <SkeletonLoader width="60px" height="1.25rem" />
        </div>
        
        <SkeletonLoader count={3} height="1rem" className="mb-2" />
        <SkeletonLoader width="80%" height="1rem" className="mb-4" />
        
        <div className="mb-4">
          <SkeletonLoader width="80px" height="0.875rem" className="mb-2" />
          <div className="flex flex-wrap gap-2">
            <SkeletonLoader width="60px" height="1.5rem" />
            <SkeletonLoader width="80px" height="1.5rem" />
            <SkeletonLoader width="70px" height="1.5rem" />
            <SkeletonLoader width="90px" height="1.5rem" />
          </div>
        </div>
        
        <div className="flex gap-4">
          <SkeletonLoader width="80px" height="1rem" />
          <SkeletonLoader width="80px" height="1rem" />
        </div>
      </div>
    </div>
  );
};

export const ContactFormSkeleton: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <SkeletonLoader width="60px" height="0.875rem" className="mb-2" />
        <SkeletonLoader height="2.75rem" />
      </div>
      
      <div>
        <SkeletonLoader width="45px" height="0.875rem" className="mb-2" />
        <SkeletonLoader height="2.75rem" />
      </div>
      
      <div>
        <SkeletonLoader width="70px" height="0.875rem" className="mb-2" />
        <SkeletonLoader height="2.75rem" />
      </div>
      
      <div>
        <SkeletonLoader width="130px" height="0.875rem" className="mb-2" />
        <SkeletonLoader height="2.75rem" />
      </div>
      
      <div>
        <SkeletonLoader width="60px" height="0.875rem" className="mb-2" />
        <SkeletonLoader height="120px" />
      </div>
      
      <SkeletonLoader height="2.75rem" />
    </div>
  );
};