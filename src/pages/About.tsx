import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Bio Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="terminal-window"
      >
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <span className="ml-2 text-terminal-green/70 text-sm">~/about/README.md</span>
        </div>
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-terminal-green terminal-glow mb-6">About Me</h1>
          
          <div className="space-y-4 text-terminal-green/90">
            <p>
              I'm a passionate full-stack developer with a love for clean code, elegant solutions, 
              and continuous learning. My journey in tech started with curiosity and has evolved 
              into a career focused on building impactful applications.
            </p>
            
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <p>
              I believe in the power of technology to solve real-world problems and am always 
              excited to take on new challenges that push my boundaries.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="terminal-window"
      >
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <span className="ml-2 text-terminal-green/70 text-sm">~/about/skills.json</span>
        </div>
        
        <div className="p-6">
          <pre className="text-terminal-green/90">
{`{
  "languages": [
    "TypeScript",
    "Python", 
    "Rust",
    "Go",
    "JavaScript"
  ],
  "frontend": [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Vite"
  ],
  "backend": [
    "Node.js",
    "Express",
    "PostgreSQL",
    "Redis",
    "GraphQL"
  ],
  "cloud": [
    "AWS",
    "Vercel",
    "Docker",
    "Kubernetes",
    "Terraform"
  ],
  "tools": [
    "Git",
    "VSCode",
    "Linux",
    "CI/CD",
    "Monitoring"
  ]
}`}
          </pre>
        </div>
      </motion.section>

      {/* Interests Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="terminal-window"
      >
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <span className="ml-2 text-terminal-green/70 text-sm">~/about/interests.txt</span>
        </div>
        
        <div className="p-6">
          <div className="space-y-3 text-terminal-green/90">
            <div>
              <span className="text-terminal-warning">🤖 AI/ML:</span> Exploring the intersection of AI and web development
            </div>
            <div>
              <span className="text-terminal-warning">🌐 Web3:</span> Building decentralized applications and smart contracts
            </div>
            <div>
              <span className="text-terminal-warning">🔧 DevOps:</span> Automating deployment pipelines and infrastructure
            </div>
            <div>
              <span className="text-terminal-warning">📊 Data:</span> Turning complex data into meaningful insights
            </div>
            <div>
              <span className="text-terminal-warning">🎮 Gaming:</span> Indie games and retro gaming enthusiast
            </div>
            <div>
              <span className="text-terminal-warning">📚 Learning:</span> Always reading about new technologies and methodologies
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};