export const TERMINAL_COMMANDS = {
  HELP: 'help',
  ABOUT: 'about',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  CONTACT: 'contact',
  RESUME: 'resume',
  CLEAR: 'clear',
  GOTO: 'goto',
  SUDO_HIRE: 'sudo hire me',
} as const;

export const COMMAND_DESCRIPTIONS = {
  [TERMINAL_COMMANDS.HELP]: 'Show available commands',
  [TERMINAL_COMMANDS.ABOUT]: 'Display bio information',
  [TERMINAL_COMMANDS.SKILLS]: 'List technical skills',
  [TERMINAL_COMMANDS.PROJECTS]: 'Show project portfolio',
  [TERMINAL_COMMANDS.CONTACT]: 'Display contact information',
  [TERMINAL_COMMANDS.RESUME]: 'Download resume',
  [TERMINAL_COMMANDS.CLEAR]: 'Clear terminal',
  [TERMINAL_COMMANDS.GOTO]: 'Navigate to specific page',
} as const;

export const VALID_GOTO_PAGES = ['home', 'about', 'projects', 'blog', 'contact'] as const;