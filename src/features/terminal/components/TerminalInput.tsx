import React, { useRef, useEffect, useCallback } from 'react';

interface TerminalInputProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly onSubmit: (command: string) => void;
  readonly onHistoryNavigation: (direction: 'up' | 'down') => void;
  readonly username: string;
}

export const TerminalInput: React.FC<TerminalInputProps> = ({
  value,
  onChange,
  onSubmit,
  onHistoryNavigation,
  username,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus the input
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        onSubmit(value);
        break;
      
      case 'ArrowUp':
        e.preventDefault();
        onHistoryNavigation('up');
        break;
      
      case 'ArrowDown':
        e.preventDefault();
        onHistoryNavigation('down');
        break;
      
      default:
        break;
    }
  }, [value, onSubmit, onHistoryNavigation]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }, [onChange]);

  const handleClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex items-center py-1" onClick={handleClick}>
      <span className="terminal-prompt">{username}@portfolio:~$</span>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="ml-2 bg-transparent outline-none flex-1 terminal-command caret-terminal-green"
        aria-label="Terminal command input"
        autoComplete="off"
        spellCheck="false"
      />
      <span className="animate-blink-fast text-terminal-green ml-1" aria-hidden="true">█</span>
    </div>
  );
};