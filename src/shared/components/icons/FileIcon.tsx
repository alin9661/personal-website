import React from 'react';
import { IconProps } from '../../types';

export const FileIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  className = '',
  'aria-label': ariaLabel = 'File',
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label={ariaLabel}
    role="img"
    {...props}
  >
    <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
    <polyline points="13,2 13,9 20,9" />
  </svg>
);