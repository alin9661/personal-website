import React from 'react';
import { IconProps } from '../../types';

// Icon components
import { HomeIcon } from './HomeIcon';
import { UserIcon } from './UserIcon';
import { FolderIcon } from './FolderIcon';
import { BriefcaseIcon } from './BriefcaseIcon';
import { DocumentIcon } from './DocumentIcon';
import { MailIcon } from './MailIcon';
import { FileIcon } from './FileIcon';

const iconMap = {
  home: HomeIcon,
  user: UserIcon,
  folder: FolderIcon,
  briefcase: BriefcaseIcon,
  document: DocumentIcon,
  mail: MailIcon,
  file: FileIcon,
} as const;

export type IconName = keyof typeof iconMap;

interface IconComponentProps extends IconProps {
  name: IconName;
}

export const Icon: React.FC<IconComponentProps> = ({ 
  name, 
  size = 16, 
  color = 'currentColor',
  className = '',
  'aria-label': ariaLabel,
  ...props 
}) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      className={className}
      aria-label={ariaLabel || name}
      {...props}
    />
  );
};