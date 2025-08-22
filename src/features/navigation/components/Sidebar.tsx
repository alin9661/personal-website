import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '../../../shared/components/icons';
import { NAVIGATION_ITEMS } from '../constants/navigationItems';
import { useLayout } from '../../../contexts/LayoutContext';

export const Sidebar: React.FC = () => {
  const { isSidebarCollapsed, toggleSidebar } = useLayout();

  return (
    <motion.aside
      initial={{ x: 0 }}
      animate={{ 
        x: isSidebarCollapsed ? -256 : 0,
        transition: { duration: 0.3, ease: 'easeInOut' }
      }}
      className="fixed left-0 top-0 h-full w-64 bg-terminal-bg border-r border-terminal-green/20 z-20 hidden md:block"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-terminal-green font-bold text-xl terminal-glow">
            Portfolio
          </h1>
          <button
            onClick={toggleSidebar}
            className="text-terminal-green hover:text-terminal-green-dark transition-colors"
            aria-label={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isSidebarCollapsed ? '»' : '«'}
          </button>
        </div>

        <nav className="space-y-2" role="menubar">
          {NAVIGATION_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
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

      <motion.button
        onClick={toggleSidebar}
        animate={{
          x: isSidebarCollapsed ? 256 : 0,
          transition: { duration: 0.3, ease: 'easeInOut' }
        }}
        className="absolute top-1/2 -translate-y-1/2 -right-8 bg-terminal-bg border border-terminal-green/20 rounded px-2 py-4 text-terminal-green hover:bg-terminal-green/10 transition-colors z-30"
        aria-label={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isSidebarCollapsed ? '»' : '«'}
      </motion.button>
    </motion.aside>
  );
};