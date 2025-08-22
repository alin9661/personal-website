import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management and payment processing.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind'],
    github: 'https://github.com/example/ecommerce',
    demo: 'https://ecommerce-demo.vercel.app',
    status: 'completed'
  },
  {
    title: 'Real-time Chat Application',
    description: 'WebSocket-based chat app with file sharing, emoji reactions, and group management.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis'],
    github: 'https://github.com/example/chat-app',
    demo: 'https://chat-demo.vercel.app',
    status: 'completed'
  },
  {
    title: 'Task Management Dashboard',
    description: 'Kanban-style project management tool with team collaboration features.',
    tech: ['React', 'Express', 'PostgreSQL', 'JWT', 'Material-UI'],
    github: 'https://github.com/example/task-manager',
    status: 'in-progress'
  },
  {
    title: 'AI Code Assistant',
    description: 'VS Code extension that provides AI-powered code suggestions and documentation.',
    tech: ['TypeScript', 'OpenAI API', 'VS Code API', 'Node.js'],
    status: 'planned'
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const statusColors = {
    completed: 'text-terminal-green',
    'in-progress': 'text-terminal-warning',
    planned: 'text-terminal-green-dark'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="terminal-window hover:border-terminal-green/40 transition-colors"
    >
      <div className="terminal-header">
        <div className="terminal-button terminal-button-red"></div>
        <div className="terminal-button terminal-button-yellow"></div>
        <div className="terminal-button terminal-button-green"></div>
        <span className="ml-2 text-terminal-green/70 text-sm">~/projects/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-terminal-green terminal-glow">
            {project.title}
          </h3>
          <span className={`text-xs px-2 py-1 rounded ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>
        
        <p className="text-terminal-green/80 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="mb-4">
          <p className="text-terminal-warning text-sm mb-2">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-terminal-green/10 border border-terminal-green/20 rounded text-terminal-green"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-green hover:text-terminal-warning transition-colors text-sm"
            >
              → GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-green hover:text-terminal-warning transition-colors text-sm"
            >
              → Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <div className="space-y-8">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="terminal-window"
      >
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <span className="ml-2 text-terminal-green/70 text-sm">~/projects/README.md</span>
        </div>
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-terminal-green terminal-glow mb-4">Projects</h1>
          <p className="text-terminal-green/80">
            A collection of projects I've built to solve problems, learn new technologies, 
            and contribute to the developer community.
          </p>
        </div>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="terminal-window"
      >
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <span className="ml-2 text-terminal-green/70 text-sm">~/projects/contributing.md</span>
        </div>
        
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold text-terminal-green mb-4">Want to Collaborate?</h2>
          <p className="text-terminal-green/80 mb-4">
            I'm always open to working on interesting projects and contributing to open source.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-2 border border-terminal-green text-terminal-green hover:bg-terminal-green/10 transition-colors rounded"
          >
            Get in Touch
          </a>
        </div>
      </motion.section>
    </div>
  );
};