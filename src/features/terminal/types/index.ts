import { TERMINAL_COMMANDS, VALID_GOTO_PAGES } from '../constants/commands';

export interface TerminalCommand {
  readonly input: string;
  readonly output: string | React.ReactElement;
  readonly timestamp: number;
}

export interface TerminalState {
  readonly commands: ReadonlyArray<TerminalCommand>;
  readonly currentInput: string;
  readonly commandHistory: ReadonlyArray<string>;
  readonly historyIndex: number;
}

export type CommandName = keyof typeof TERMINAL_COMMANDS;
export type ValidGotoPage = typeof VALID_GOTO_PAGES[number];

export interface CommandHandler {
  readonly execute: (input: string, args: ReadonlyArray<string>) => string | React.ReactElement;
  readonly description: string;
}

export interface TerminalProps {
  readonly username?: string;
  readonly className?: string;
  readonly 'aria-label'?: string;
}

export interface CommandOutput {
  readonly type: 'text' | 'component' | 'navigation';
  readonly content: string | React.ReactElement;
  readonly delay?: number;
}