import { useReducer, useCallback } from 'react';
import { TerminalState, TerminalCommand } from '../types';

type TerminalAction = 
  | { type: 'ADD_COMMAND'; payload: TerminalCommand }
  | { type: 'CLEAR_COMMANDS' }
  | { type: 'SET_CURRENT_INPUT'; payload: string }
  | { type: 'ADD_TO_HISTORY'; payload: string }
  | { type: 'SET_HISTORY_INDEX'; payload: number }
  | { type: 'RESET_HISTORY_INDEX' };

const initialState: TerminalState = {
  commands: [
    {
      input: '',
      output: 'Welcome! Type "help" for available commands.',
      timestamp: Date.now(),
    }
  ],
  currentInput: '',
  commandHistory: [],
  historyIndex: -1,
};

const terminalReducer = (state: TerminalState, action: TerminalAction): TerminalState => {
  switch (action.type) {
    case 'ADD_COMMAND':
      return {
        ...state,
        commands: [...state.commands, action.payload],
      };
    
    case 'CLEAR_COMMANDS':
      return {
        ...state,
        commands: [],
        currentInput: '',
      };
    
    case 'SET_CURRENT_INPUT':
      return {
        ...state,
        currentInput: action.payload,
      };
    
    case 'ADD_TO_HISTORY':
      return {
        ...state,
        commandHistory: [...state.commandHistory, action.payload],
      };
    
    case 'SET_HISTORY_INDEX':
      return {
        ...state,
        historyIndex: action.payload,
      };
    
    case 'RESET_HISTORY_INDEX':
      return {
        ...state,
        historyIndex: -1,
        currentInput: '',
      };
    
    default:
      return state;
  }
};

export const useTerminalState = () => {
  const [state, dispatch] = useReducer(terminalReducer, initialState);

  const addCommand = useCallback((command: TerminalCommand) => {
    dispatch({ type: 'ADD_COMMAND', payload: command });
  }, []);

  const clearCommands = useCallback(() => {
    dispatch({ type: 'CLEAR_COMMANDS' });
  }, []);

  const setCurrentInput = useCallback((input: string) => {
    dispatch({ type: 'SET_CURRENT_INPUT', payload: input });
  }, []);

  const addToHistory = useCallback((command: string) => {
    dispatch({ type: 'ADD_TO_HISTORY', payload: command });
  }, []);

  const setHistoryIndex = useCallback((index: number) => {
    dispatch({ type: 'SET_HISTORY_INDEX', payload: index });
  }, []);

  const resetHistoryIndex = useCallback(() => {
    dispatch({ type: 'RESET_HISTORY_INDEX' });
  }, []);

  const navigateHistory = useCallback((direction: 'up' | 'down') => {
    const { commandHistory, historyIndex } = state;
    
    if (direction === 'up' && historyIndex < commandHistory.length - 1) {
      const newIndex = historyIndex + 1;
      const command = commandHistory[commandHistory.length - 1 - newIndex];
      if (command) {
        setHistoryIndex(newIndex);
        setCurrentInput(command);
      }
    } else if (direction === 'down') {
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        const command = commandHistory[commandHistory.length - 1 - newIndex];
        if (command) {
          setHistoryIndex(newIndex);
          setCurrentInput(command);
        }
      } else if (historyIndex === 0) {
        resetHistoryIndex();
      }
    }
  }, [state, setHistoryIndex, setCurrentInput, resetHistoryIndex]);

  return {
    state,
    actions: {
      addCommand,
      clearCommands,
      setCurrentInput,
      addToHistory,
      navigateHistory,
      resetHistoryIndex,
    },
  };
};