import React from 'react';
import { TerminalCommand } from '../types';

interface TerminalOutputProps {
  readonly commands: ReadonlyArray<TerminalCommand>;
  readonly username: string;
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({
  commands,
  username,
}) => {
  return (
    <div role="log" aria-live="polite" aria-label="Terminal output" className="space-y-3">
      {commands.map((command, index) => (
        <div key={`${command.timestamp}-${index}`}>
          {command.input && (
            <div className="mb-1">
              <span className="terminal-prompt">{username}@portfolio:~$</span>
              <span className="ml-2 terminal-command">{command.input}</span>
            </div>
          )}
          <div className="text-terminal-green/90 terminal-text-sm leading-relaxed">
            {command.output}
          </div>
        </div>
      ))}
    </div>
  );
};