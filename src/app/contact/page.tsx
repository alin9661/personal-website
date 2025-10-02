'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export const dynamic = 'force-dynamic';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! (This is a demo form)');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 pb-10 flex items-center justify-center"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-16"
        >
          Get In Touch
        </motion.h1>

        <motion.form
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <motion.label
              htmlFor="name"
              className="block text-sm font-medium mb-2"
              whileFocus={{ color: '#3b82f6' }}
            >
              Name
            </motion.label>
            <motion.input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              whileFocus={{ scale: 1.02, borderColor: '#3b82f6' }}
            />
          </div>

          <div>
            <motion.label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
            >
              Email
            </motion.label>
            <motion.input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              whileFocus={{ scale: 1.02, borderColor: '#3b82f6' }}
            />
          </div>

          <div>
            <motion.label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
            >
              Message
            </motion.label>
            <motion.textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              whileFocus={{ scale: 1.02, borderColor: '#3b82f6' }}
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-neutral-50 text-black py-3 px-6 rounded-lg font-medium hover:bg-neutral-300 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
}