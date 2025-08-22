import React from 'react';
import { Terminal } from '../features/terminal';
import { TypingEffect } from '../components/Terminal/TypingEffect';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="terminal-window"
      >
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <span className="ml-2 text-terminal-green/70 text-sm">~/home/README.md</span>
        </div>
        
        <div className="p-4 md:p-6">
          <div className="mb-6">
            <span className="terminal-prompt">visitor@portfolio:~$</span>
            <span className="ml-2 terminal-command">cat README.md</span>
          </div>
          
          <div className="terminal-spacing-normal text-terminal-green/90">
            <h1 className="terminal-text-2xl md:terminal-text-4xl font-bold terminal-glow mb-6 md:mb-8">
              <TypingEffect text="# Aaron Lin" speed={100} />
            </h1>
            
            <div className="terminal-spacing-tight mb-8">
              <p className="terminal-text-base md:terminal-text-lg">
                <span className="text-terminal-warning">##</span> Full-Stack Developer & Problem Solver
              </p>
              <p className="terminal-text-base leading-relaxed">
                Passionate about building scalable, user-centric applications with modern technologies.
              </p>
              <p className="terminal-text-base leading-relaxed">
                Currently exploring AI/ML integrations and cloud-native architectures.
              </p>
            </div>

            <div className="terminal-spacing-tight mb-8">
              <p className="terminal-text-base"><span className="text-terminal-warning">Languages:</span> TypeScript, Python, Rust, Go</p>
              <p className="terminal-text-base"><span className="text-terminal-warning">Frontend:</span> React, Next.js, Tailwind CSS</p>
              <p className="terminal-text-base"><span className="text-terminal-warning">Backend:</span> Node.js, PostgreSQL, AWS, Docker</p>
            </div>

            <div>
              <p className="text-terminal-green-dark mb-3 terminal-text-sm">Quick links:</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 terminal-text-sm">
                <a href="/projects" className="hover:text-terminal-green transition-colors">→ Projects</a>
                <a href="/contact" className="hover:text-terminal-green transition-colors">→ Contact</a>
                <a href="/resume" className="hover:text-terminal-green transition-colors">→ Resume</a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Interactive Terminal */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="terminal-window"
      >
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <span className="ml-2 text-terminal-green/70 text-sm">Interactive Terminal</span>
        </div>
        
        <Terminal username="visitor" className="text-xs md:text-sm" />
      </motion.section>

      {/* Quick Stats */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {[
          { label: 'Projects Completed', value: '15+' },
          { label: 'Years Experience', value: '3+' },
          { label: 'Coffee Consumed', value: '∞' },
        ].map((stat, index) => (
          <div key={index} className="terminal-window">
            <div className="p-4 md:p-6 text-center">
              <div className="terminal-text-xl md:terminal-text-2xl font-bold text-terminal-green terminal-glow mb-2 md:mb-3">
                {stat.value}
              </div>
              <div className="text-terminal-green/70 terminal-text-xs md:terminal-text-sm font-medium">{stat.label}</div>
            </div>
          </div>
        ))}
      </motion.section>
    </div>
  );
};