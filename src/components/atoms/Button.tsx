import React from "preact/compat";

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '' }) => {
  return (
    <button
      className={`
        h-10 px-28 py-2.5 rounded-md justify-center items-center inline-flex
        ${variant === 'primary' ? 'bg-zinc-900 text-neutral-50' : 'bg-white text-zinc-950'}
        ${className}
      `}
    >
      <span className="text-center text-sm font-medium font-['Inter'] leading-tight">
        {children}
      </span>
    </button>
  );
}; 