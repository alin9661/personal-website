import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  company: string;
  reason: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    reason: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', reason: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Contact Header */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="terminal-window"
      >
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <span className="ml-2 text-terminal-green/70 text-sm">~/contact/README.md</span>
        </div>
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-terminal-green terminal-glow mb-4">Get In Touch</h1>
          <p className="text-terminal-green/80">
            Let's connect! Whether you have a project in mind, want to collaborate, 
            or just want to say hello, I'd love to hear from you.
          </p>
        </div>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="terminal-window"
        >
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <span className="ml-2 text-terminal-green/70 text-sm">~/contact/message.form</span>
          </div>
          
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-terminal-green text-sm mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-terminal-bg border border-terminal-green/30 rounded px-3 py-2 text-terminal-green focus:border-terminal-green outline-none"
                />
              </div>

              <div>
                <label className="block text-terminal-green text-sm mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-terminal-bg border border-terminal-green/30 rounded px-3 py-2 text-terminal-green focus:border-terminal-green outline-none"
                />
              </div>

              <div>
                <label className="block text-terminal-green text-sm mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-terminal-bg border border-terminal-green/30 rounded px-3 py-2 text-terminal-green focus:border-terminal-green outline-none"
                />
              </div>

              <div>
                <label className="block text-terminal-green text-sm mb-2">Reason for Contact *</label>
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-terminal-bg border border-terminal-green/30 rounded px-3 py-2 text-terminal-green focus:border-terminal-green outline-none"
                >
                  <option value="">Select a reason</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Consulting">Consulting</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-terminal-green text-sm mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-terminal-bg border border-terminal-green/30 rounded px-3 py-2 text-terminal-green focus:border-terminal-green outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-transparent border border-terminal-green text-terminal-green hover:bg-terminal-green/10 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-terminal-green text-sm">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-terminal-error text-sm">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </motion.section>

        {/* Contact Info */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-button terminal-button-red"></div>
              <div className="terminal-button terminal-button-yellow"></div>
              <div className="terminal-button terminal-button-green"></div>
              <span className="ml-2 text-terminal-green/70 text-sm">~/contact/social.links</span>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <span className="text-terminal-warning">Email:</span>
                <span className="ml-2 text-terminal-green">aaron@example.com</span>
              </div>
              
              <div>
                <span className="text-terminal-warning">LinkedIn:</span>
                <a href="https://linkedin.com/in/aaron-lin" target="_blank" rel="noopener noreferrer" className="ml-2 text-terminal-green hover:text-terminal-warning transition-colors">
                  /in/aaron-lin
                </a>
              </div>
              
              <div>
                <span className="text-terminal-warning">GitHub:</span>
                <a href="https://github.com/aaron-lin" target="_blank" rel="noopener noreferrer" className="ml-2 text-terminal-green hover:text-terminal-warning transition-colors">
                  @aaron-lin
                </a>
              </div>
              
              <div>
                <span className="text-terminal-warning">Twitter:</span>
                <a href="https://twitter.com/aaron_codes" target="_blank" rel="noopener noreferrer" className="ml-2 text-terminal-green hover:text-terminal-warning transition-colors">
                  @aaron_codes
                </a>
              </div>
            </div>
          </div>

          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-button terminal-button-red"></div>
              <div className="terminal-button terminal-button-yellow"></div>
              <div className="terminal-button terminal-button-green"></div>
              <span className="ml-2 text-terminal-green/70 text-sm">~/contact/response.md</span>
            </div>
            
            <div className="p-6">
              <h3 className="text-terminal-green font-bold mb-3">Response Time</h3>
              <p className="text-terminal-green/80 text-sm">
                I typically respond to messages within 24-48 hours. 
                For urgent matters, feel free to reach out on LinkedIn for faster response.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};