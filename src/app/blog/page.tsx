'use client';

import { motion } from 'framer-motion';

// Mock API data - in a real app, this would come from a CMS
const blogPosts = [
  {
    id: 1,
    title: 'Understanding Implied vs Realized Volatility in Crypto Markets',
    summary: 'A deep dive into volatility metrics and their applications in cryptocurrency trading strategies.',
    date: '2024-01-15',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Building High-Performance Async Servers with Python',
    summary: 'Lessons learned from developing scalable backend systems for financial data processing.',
    date: '2024-01-08',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Statistical Arbitrage: Finding Edges in Modern Markets',
    summary: 'Exploring quantitative approaches to identify and exploit market inefficiencies.',
    date: '2024-01-01',
    readTime: '10 min read',
  },
  {
    id: 4,
    title: 'The Future of DeFi: Trends and Opportunities',
    summary: 'Analyzing current developments in decentralized finance and their implications.',
    date: '2023-12-20',
    readTime: '7 min read',
  },
];

export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 pb-10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-gray-900"
        >
          Blog & Research
        </motion.h1>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                  {post.title}
                </h2>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.summary}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}