import React, { type ReactNode } from 'react';
import { Sidebar, MobileNav } from '../../features/navigation';
import { Header } from './Header';
import { motion } from 'framer-motion';
import { useLayout } from '../../contexts/LayoutContext';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isSidebarCollapsed } = useLayout();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');

  // Calculate the proper margin based on device and sidebar state
  const getMainMargin = () => {
    if (isMobile) return '0px';
    if (isTablet) return isSidebarCollapsed ? '0px' : '200px';
    return isSidebarCollapsed ? '0px' : '256px'; // 256px = 16rem (w-64)
  };

  return (
    <div className="min-h-screen bg-terminal-bg overflow-x-hidden">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Navigation */}
      <MobileNav />

      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <motion.main
        animate={{
          marginLeft: getMainMargin(),
          transition: { duration: 0.3, ease: 'easeInOut' }
        }}
        className="min-h-screen pt-12 pb-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
        >
          {children}
        </motion.div>
      </motion.main>
    </div>
  );
};
