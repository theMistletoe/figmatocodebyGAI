import React, { InputHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconImage?: LucideIcon;
  className?: string;
}

const Input: React.FC<InputProps> = ({ 
  iconImage: Icon, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
      )}
      <input
        className={`h-8 bg-white/20 rounded px-8 text-white placeholder-white/60 ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;