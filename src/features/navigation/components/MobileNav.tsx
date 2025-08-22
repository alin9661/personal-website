import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../../../shared/components/icons';
import { NAVIGATION_ITEMS } from '../constants/navigationItems';

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="fixed top-3 left-4 z-50 p-2 text-terminal-green hover:text-terminal-green-dark transition-colors"
        aria-label="Toggle mobile menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center gap-1">
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            className="w-full h-0.5 bg-current"
          />
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-full h-0.5 bg-current"
          />
          <motion.div
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            className="w-full h-0.5 bg-current"
          />
        </div>
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/50 z-40"
            />
            
            {/* Menu */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="fixed left-0 top-0 h-full w-64 bg-terminal-bg border-r border-terminal-green/20 z-40 p-4"
            >
              <div className="mt-16">
                <h1 className="text-terminal-green font-bold text-xl terminal-glow mb-8">
                  Portfolio
                </h1>

                <nav className="space-y-2" role="menubar">
                  {NAVIGATION_ITEMS.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded transition-colors ${
                          isActive
                            ? 'bg-terminal-green/20 text-terminal-green border-l-2 border-terminal-green'
                            : 'text-terminal-green/70 hover:bg-terminal-green/10 hover:text-terminal-green'
                        }`
                      }
                      role="menuitem"
                    >
                      <span className="flex items-center gap-2">
                        <Icon 
                          name={item.iconName} 
                          size={16} 
                          aria-hidden="true"
                        />
                        <span>{item.label}</span>
                      </span>
                    </NavLink>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-terminal-green/20">
                  <div className="text-terminal-green/50 text-xs" role="status">
                    <p>Last login: {new Date().toLocaleString()}</p>
                    <p className="mt-1">Session: active</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};