export interface BaseComponent {
  className?: string;
  children?: React.ReactNode;
}

export interface IconProps extends BaseComponent {
  size?: number;
  color?: string;
  'aria-label'?: string;
}

export interface NavigationItem {
  readonly path: string;
  readonly label: string;
  readonly iconName?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ErrorInfo {
  message: string;
  stack?: string | undefined;
  componentStack?: string;
}