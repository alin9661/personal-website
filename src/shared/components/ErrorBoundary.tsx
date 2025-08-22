import { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorInfo as ErrorInfoType } from '../types';

interface Props {
  readonly children: ReactNode;
  readonly fallback?: ReactNode;
  readonly onError?: (error: ErrorInfoType) => void;
}

interface State {
  readonly hasError: boolean;
  readonly error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    const { onError } = this.props;
    
    if (onError) {
      onError({
        message: error.message,
        stack: error.stack || undefined,
        componentStack: errorInfo.componentStack || undefined,
      });
    }

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  render(): ReactNode {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

      return (
        <div className="terminal-window p-6 m-4">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <span className="ml-2 text-terminal-green/70 text-sm">~/error</span>
          </div>
          
          <div className="p-6 space-y-4">
            <h2 className="text-terminal-error text-xl font-bold">
              Something went wrong
            </h2>
            
            <p className="text-terminal-green/80">
              An unexpected error occurred. Please refresh the page and try again.
            </p>
            
            {process.env.NODE_ENV === 'development' && error && (
              <details className="mt-4">
                <summary className="text-terminal-warning cursor-pointer">
                  Error Details (Development)
                </summary>
                <pre className="text-terminal-green/70 text-xs mt-2 whitespace-pre-wrap">
                  {error.message}
                  {error.stack && `\n\n${error.stack}`}
                </pre>
              </details>
            )}
            
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 border border-terminal-green text-terminal-green hover:bg-terminal-green/10 transition-colors rounded"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return children;
  }
}