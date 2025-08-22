import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface Command {
  input: string;
  output: string | React.ReactElement;
}

interface TerminalProps {
  username?: string;
}

export const Terminal: React.FC<TerminalProps> = ({ username = 'visitor' }) => {
  const [commands, setCommands] = useState<Command[]>([
    { input: '', output: 'Welcome! Type "help" for available commands.' }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Auto-scroll to bottom on new command
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  // Focus input on terminal click
  const handleTerminalClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.toLowerCase().trim();
    let output: string | React.ReactElement = 'Command not found. Type "help" for available commands.';

    switch (trimmedCmd) {
      case 'help':
        output = (
          <div className="space-y-1">
            <p className="text-terminal-green-dark">Available commands:</p>
            <div className="ml-4 space-y-1">
              <p><span className="text-terminal-warning">about</span> - Display bio</p>
              <p><span className="text-terminal-warning">skills</span> - List technical skills</p>
              <p><span className="text-terminal-warning">projects</span> - Show projects</p>
              <p><span className="text-terminal-warning">contact</span> - Display contact info</p>
              <p><span className="text-terminal-warning">resume</span> - Download resume</p>
              <p><span className="text-terminal-warning">clear</span> - Clear terminal</p>
              <p><span className="text-terminal-warning">goto [page]</span> - Navigate to page</p>
            </div>
          </div>
        );
        break;
      
      case 'clear':
        setCommands([]);
        setCurrentInput('');
        return;
      
      case 'about':
        output = (
          <div>
            <p>Full-stack developer passionate about building elegant solutions.</p>
            <p className="mt-2">Specializing in React, TypeScript, and Node.js.</p>
          </div>
        );
        break;
      
      case 'skills':
        output = (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-terminal-warning mb-1">Frontend:</p>
              <p>• React / Next.js</p>
              <p>• TypeScript</p>
              <p>• Tailwind CSS</p>
            </div>
            <div>
              <p className="text-terminal-warning mb-1">Backend:</p>
              <p>• Node.js</p>
              <p>• PostgreSQL</p>
              <p>• AWS</p>
            </div>
          </div>
        );
        break;
      
      case 'resume':
        output = 'Downloading resume...';
        window.open('/resume.pdf', '_blank');
        break;
      
      case 'sudo hire me':
        output = (
          <div className="text-terminal-warning">
            <p>[sudo] password for {username}: ****</p>
            <p className="mt-2 text-terminal-green">Access granted! Redirecting to contact...</p>
          </div>
        );
        setTimeout(() => navigate('/contact'), 2000);
        break;
      
      default:
        // Handle 'goto' commands
        if (trimmedCmd.startsWith('goto ')) {
          const page = trimmedCmd.substring(5);
          const validPages = ['home', 'about', 'projects', 'blog', 'contact'];
          
          if (validPages.includes(page)) {
            output = `Navigating to ${page}...`;
            setTimeout(() => navigate(`/${page === 'home' ? '' : page}`), 500);
          } else {
            output = `Invalid page. Valid pages: ${validPages.join(', ')}`;
          }
        }
    }

    setCommands(prev => [...prev, { input: cmd, output }]);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setCurrentInput('');
  }, [username, navigate]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  }, [currentInput, commandHistory, historyIndex, handleCommand]);

  return (
    <div 
      ref={terminalRef}
      onClick={handleTerminalClick}
      className="bg-terminal-bg p-4 rounded-lg border border-terminal-green/20 
               h-96 overflow-y-auto cursor-text font-mono text-sm"
    >
      <div className="mb-2">
        <span className="text-terminal-green">{username}@portfolio:~$</span>
        <span className="ml-2">whoami</span>
      </div>
      
      {commands.map((cmd, i) => (
        <div key={i} className="mb-2">
          {cmd.input && (
            <div>
              <span className="text-terminal-green">{username}@portfolio:~$</span>
              <span className="ml-2">{cmd.input}</span>
            </div>
          )}
          <div className="text-terminal-green/90 ml-0">{cmd.output}</div>
        </div>
      ))}
      
      <div className="flex items-center">
        <span className="text-terminal-green">{username}@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="ml-2 bg-transparent outline-none flex-1 text-terminal-green"
          autoFocus
        />
        <span className="animate-blink text-terminal-green">█</span>
      </div>
    </div>
  );
};