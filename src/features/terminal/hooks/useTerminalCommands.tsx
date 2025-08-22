import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { CommandHandler } from '../types';
import { TERMINAL_COMMANDS, COMMAND_DESCRIPTIONS, VALID_GOTO_PAGES } from '../constants/commands';

export const useTerminalCommands = (username: string): Record<string, CommandHandler> => {
  const navigate = useNavigate();

  const helpCommand = useCallback((): React.ReactElement => (
    <div className="space-y-1">
      <p className="text-terminal-green-dark">Available commands:</p>
      <div className="ml-4 space-y-1">
        {Object.entries(COMMAND_DESCRIPTIONS).map(([cmd, desc]) => (
          <p key={cmd}>
            <span className="text-terminal-warning">{cmd}</span> - {desc}
          </p>
        ))}
      </div>
    </div>
  ), []);

  const aboutCommand = useCallback((): React.ReactElement => (
    <div>
      <p>Full-stack developer passionate about building elegant solutions.</p>
      <p className="mt-2">Specializing in React, TypeScript, and Node.js.</p>
    </div>
  ), []);

  const skillsCommand = useCallback((): React.ReactElement => (
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
  ), []);

  const projectsCommand = useCallback((): string => 
    'Navigating to projects...', []);

  const contactCommand = useCallback((): string => 
    'Navigating to contact...', []);

  const resumeCommand = useCallback((): string => {
    window.open('/resume.pdf', '_blank');
    return 'Opening resume...';
  }, []);

  const sudoHireCommand = useCallback((): React.ReactElement => {
    setTimeout(() => navigate('/contact'), 2000);
    return (
      <div className="text-terminal-warning">
        <p>[sudo] password for {username}: ****</p>
        <p className="mt-2 text-terminal-green">Access granted! Redirecting to contact...</p>
      </div>
    );
  }, [username, navigate]);

  const gotoCommand = useCallback((_input: string, args: readonly string[]): string => {
    const page = args[0];
    
    if (!page) {
      return `Usage: goto <page>. Valid pages: ${VALID_GOTO_PAGES.join(', ')}`;
    }

    if (!VALID_GOTO_PAGES.includes(page as any)) {
      return `Invalid page "${page}". Valid pages: ${VALID_GOTO_PAGES.join(', ')}`;
    }

    setTimeout(() => {
      navigate(`/${page === 'home' ? '' : page}`);
    }, 500);

    return `Navigating to ${page}...`;
  }, [navigate]);

  return {
    [TERMINAL_COMMANDS.HELP]: {
      execute: helpCommand,
      description: COMMAND_DESCRIPTIONS[TERMINAL_COMMANDS.HELP],
    },
    [TERMINAL_COMMANDS.ABOUT]: {
      execute: aboutCommand,
      description: COMMAND_DESCRIPTIONS[TERMINAL_COMMANDS.ABOUT],
    },
    [TERMINAL_COMMANDS.SKILLS]: {
      execute: skillsCommand,
      description: COMMAND_DESCRIPTIONS[TERMINAL_COMMANDS.SKILLS],
    },
    [TERMINAL_COMMANDS.PROJECTS]: {
      execute: projectsCommand,
      description: COMMAND_DESCRIPTIONS[TERMINAL_COMMANDS.PROJECTS],
    },
    [TERMINAL_COMMANDS.CONTACT]: {
      execute: contactCommand,
      description: COMMAND_DESCRIPTIONS[TERMINAL_COMMANDS.CONTACT],
    },
    [TERMINAL_COMMANDS.RESUME]: {
      execute: resumeCommand,
      description: COMMAND_DESCRIPTIONS[TERMINAL_COMMANDS.RESUME],
    },
    [TERMINAL_COMMANDS.SUDO_HIRE]: {
      execute: sudoHireCommand,
      description: 'Easter egg command',
    },
    [TERMINAL_COMMANDS.GOTO]: {
      execute: gotoCommand,
      description: COMMAND_DESCRIPTIONS[TERMINAL_COMMANDS.GOTO],
    },
  };
};