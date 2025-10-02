'use client';

import { motion } from 'framer-motion';

export const dynamic = 'force-dynamic';

const projects = [
  {
    year: '2024',
    title: 'Crypto Volatility Visualizer',
    description: 'A comprehensive tool to chart and analyze implied vs. realized volatility in cryptocurrency markets. Built with Python and modern data visualization libraries.',
    tech: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
    demoUrl: '#',
    githubUrl: '#',
    icon: '📊',
  },
  {
    year: '2023',
    title: 'Market Inefficiency Analysis Tool',
    description: 'A dashboard built to identify statistical arbitrage opportunities across multiple asset classes. Features real-time data processing and automated signal generation.',
    tech: ['Python', 'NumPy', 'Scikit-learn', 'Dash'],
    demoUrl: '#',
    githubUrl: '#',
    icon: '📈',
  },
  {
    year: '2022',
    title: 'Async MCP Server in Python',
    description: 'A high-throughput backend project demonstrating advanced server architecture with asynchronous processing, perfect for handling large-scale financial data streams.',
    tech: ['Python', 'AsyncIO', 'FastAPI', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#',
    icon: '⚡',
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 pb-10 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-8 text-[#F8F8F8]"
        >
          MY WORK & PROJECTS
        </motion.h1>

        {/* Journey Section Title */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-center mb-16 text-[#F8F8F8]"
        >
          OUR JOURNEY
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-[#D8BFD8] h-full hidden md:block"></div>

          {/* Modularize into Card Component */}
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Year */}
                <motion.div
                  initial={{ x: isEven ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                  viewport={{ once: true }}
                  className={`w-full md:w-24 text-center md:text-left ${
                    isEven ? 'md:text-right' : 'md:text-left'
                  } mb-4 md:mb-0`}
                >
                  <span className="text-3xl md:text-4xl font-bold text-[#F8F8F8]">
                    {project.year}
                  </span>
                </motion.div>

                {/* Timeline Marker */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                  className="relative z-10 w-12 h-12 bg-[#D8BFD8] rounded-full flex items-center justify-center shadow-lg"
                >
                  {/* <span className="text-xl text-[#F8F8F8]">{project.icon}</span> */}
                </motion.div>

                {/* Project Card */}
                <motion.div
                  initial={{ x: isEven ? 50 : -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className={`w-full md:w-96 bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700 ${
                    isEven ? 'md:ml-8' : 'md:mr-8'
                  }`}
                >
                  <h3 className="text-xl font-bold text-[#F8F8F8] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[#F8F8F8] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-[#F8F8F8] text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.demoUrl}
                      className="flex items-center gap-2 text-[#FFC0CB] hover:text-[#F8F8F8] transition-colors font-medium"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4.5a.75.75 0 011.5 0v4.5A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4.5a.75.75 0 010 1.5h-4.5z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-[#FFC0CB] hover:text-[#171717] transition-colors font-medium"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C10.71 10.017 10 0z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}