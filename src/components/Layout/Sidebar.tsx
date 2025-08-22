import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

interface SidebarItem {
  path: string;
  label: string;
  icon?: string;
}

const sidebarItems: SidebarItem[] = [
  { path: '/', label: '~/home', icon: '🏠' },
  { path: '/about', label: '~/about', icon: '👤' },
  { path: '/projects', label: '~/projects', icon: '📂' },
  { path: '/experience', label: '~/experience', icon: '💼' },
  { path: '/blog', label: '~/blog', icon: '📝' },
  { path: '/contact', label: '~/contact', icon: '📧' },
  { path: '/resume', label: '~/resume', icon: '📄' },
];

export const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.aside
      initial={{ x: 0 }}
      animate={{ x: isCollapsed ? -200 : 0 }}
      className="fixed left-0 top-0 h-full w-64 bg-terminal-bg border-r border-terminal-green/20 z-20"
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-terminal-green font-bold text-xl terminal-glow">
            Portfolio
          </h1>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-terminal-green hover:text-terminal-green-dark transition-colors"
          >
            {isCollapsed ? '»' : '«'}
          </button>
        </div>

        <nav className="space-y-2">
          {sidebarItems.map((item) => (
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
            >
              <span className="flex items-center gap-2">
                {item.icon && <span className="text-sm">{item.icon}</span>}
                <span>{item.label}</span>
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-8 pt-8 border-t border-terminal-green/20">
          <div className="text-terminal-green/50 text-xs">
            <p>Last login: {new Date().toLocaleString()}</p>
            <p className="mt-1">Session: active</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`absolute top-1/2 -translate-y-1/2 ${
          isCollapsed ? 'left-full ml-2' : '-right-8'
        } bg-terminal-bg border border-terminal-green/20 rounded px-2 py-4 text-terminal-green hover:bg-terminal-green/10 transition-all`}
      >
        {isCollapsed ? '»' : '«'}
      </button>
    </motion.aside>
  );
};