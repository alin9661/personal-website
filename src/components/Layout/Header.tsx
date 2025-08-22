import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLayout } from '../../contexts/LayoutContext';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export const Header: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const location = useLocation();
  const { isSidebarCollapsed } = useLayout();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getCurrentPath = () => {
    const path = location.pathname;
    return path === '/' ? '~/home' : `~${path}`;
  };

  const getHeaderLeft = () => {
    if (isMobile) return '0';
    if (isTablet) return isSidebarCollapsed ? '60px' : '200px';
    return isSidebarCollapsed ? '60px' : '256px';
  };

  return (
    <motion.header
      animate={{ 
        left: getHeaderLeft(),
        transition: { duration: 0.3, ease: 'easeInOut' }
      }}
      className="fixed top-0 right-0 h-12 bg-terminal-bg/95 backdrop-blur-sm border-b border-terminal-green/20 z-30"
    >
      <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="text-terminal-green font-mono text-xs sm:text-sm truncate max-w-[120px] sm:max-w-none">
            {getCurrentPath()}
          </span>
          <span className="hidden sm:inline text-terminal-green/50 text-xs">
            {location.pathname === '/' ? 'README.md' : `index.tsx`}
          </span>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="text-terminal-green/70 text-xs font-mono hidden sm:inline">
            {time.toLocaleTimeString()}
          </span>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-terminal-warning rounded-full"></span>
            <span className="w-2 h-2 bg-terminal-error rounded-full"></span>
          </div>
        </div>
      </div>
    </motion.header>
  );
};