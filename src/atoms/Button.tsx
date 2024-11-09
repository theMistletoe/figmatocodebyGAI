import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'default',
  className = '', 
  ...props 
}) => {
  const variants = {
    default: 'bg-transparent text-white hover:bg-white/10',
    primary: 'bg-white/20 text-white hover:bg-white/30',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200'
  };

  return (
    <button
      className={`px-3 py-1.5 rounded flex items-center ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;