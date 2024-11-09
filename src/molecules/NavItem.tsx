import React from 'react';
import { ChevronDown } from 'lucide-react';

interface NavItemProps {
  label: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="flex items-center px-3 text-white hover:bg-white/10 rounded"
    >
      {label}
      <ChevronDown className="ml-2 w-4 h-4" />
    </button>
  );
};

export default NavItem;