import React from 'react';
import { IconProps } from '../../types';

export const BriefcaseIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  className = '',
  'aria-label': ariaLabel = 'Briefcase',
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
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
  </svg>
);