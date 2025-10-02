'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-neutral-100">
            Aaron Lin
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-gray-600 transition-colors duration-200 text-neutral-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            {/* Mobile menu button - can be expanded later */}
            <button className="text-gray-700 hover:text-gray-900">
              Menu
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}