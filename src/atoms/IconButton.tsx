import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  icon: LucideIcon;
  label: string;
  className?: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ 
  icon: Icon, 
  label, 
  className = '', 
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center p-2 rounded hover:bg-gray-200/10 ${className}`}
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
};

export default IconButton;