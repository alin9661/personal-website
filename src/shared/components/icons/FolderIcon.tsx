import React from 'react';
import { IconProps } from '../../types';

export const FolderIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  className = '',
  'aria-label': ariaLabel = 'Folder',
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
    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
  </svg>
);