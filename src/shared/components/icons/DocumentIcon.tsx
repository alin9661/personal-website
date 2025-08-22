import React from 'react';
import { IconProps } from '../../types';

export const DocumentIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  className = '',
  'aria-label': ariaLabel = 'Document',
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
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
  </svg>
);