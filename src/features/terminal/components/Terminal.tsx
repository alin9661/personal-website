import React, { useRef, useEffect, useCallback } from 'react';
import { TerminalProps } from '../types';
import { TerminalInput } from './TerminalInput';
import { TerminalOutput } from './TerminalOutput';
import { useTerminalState } from '../hooks/useTerminalState';
import { useTerminalCommands } from '../hooks/useTerminalCommands';
import { TERMINAL_COMMANDS } from '../constants/commands';

export const Terminal: React.FC<TerminalProps> = ({ 
  username = 'visitor',
  className = '',
  'aria-label': ariaLabel = 'Interactive terminal',
}) => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const { state, actions } = useTerminalState();
  const commands = useTerminalCommands(username);

  // Auto-scroll to bottom on new command with smooth behavior
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [state.commands]);

  const handleCommand = useCallback((input: string) => {
    const trimmedInput = input.trim();
    
    if (!trimmedInput) {
      return;
    }

    // Handle clear command specially
    if (trimmedInput.toLowerCase() === TERMINAL_COMMANDS.CLEAR) {
      actions.clearCommands();
      actions.addToHistory(trimmedInput);
      actions.resetHistoryIndex();
      return;
    }

    // Parse command and arguments
    const [commandName, ...args] = trimmedInput.toLowerCase().split(' ');
    const handler = commands[commandName] || commands[trimmedInput.toLowerCase()];

    let output: string | React.ReactElement = 'Command not found. Type "help" for available commands.';
    
    if (handler) {
      output = handler.execute(trimmedInput, args);
    }

    // Add command to history
    const command = {
      input: trimmedInput,
      output,
      timestamp: Date.now(),
    };

    actions.addCommand(command);
    actions.addToHistory(trimmedInput);
    actions.resetHistoryIndex();
  }, [commands, actions]);

  const handleTerminalClick = useCallback(() => {
    // Focus the terminal input when clicking anywhere in the terminal
    const input = terminalRef.current?.querySelector('input');
    if (input) {
      input.focus();
    }
  }, []);

  return (
    <div 
      ref={terminalRef}
      onClick={handleTerminalClick}
      className={`bg-terminal-bg p-4 md:p-6 rounded-lg border border-terminal-green/20 
                 h-64 md:h-96 overflow-y-auto cursor-text font-mono text-sm terminal-scroll ${className}`}
      role="application"
      aria-label={ariaLabel}
    >
      <div className="mb-4">
        <span className="terminal-prompt">{username}@portfolio:~$</span>
        <span className="ml-2 terminal-command">whoami</span>
      </div>
      
      <TerminalOutput commands={state.commands} username={username} />
      
      <TerminalInput
        value={state.currentInput}
        onChange={actions.setCurrentInput}
        onSubmit={handleCommand}
        onHistoryNavigation={actions.navigateHistory}
        username={username}
      />
    </div>
  );
};