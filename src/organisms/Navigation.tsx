import React from 'react';
import { Menu, Search, Settings } from 'lucide-react';
import IconButton from '../atoms/IconButton';
import Input from '../atoms/Input';
import NavItem from '../molecules/NavItem';

const Navigation: React.FC = () => {
  return (
    <nav className="h-12 bg-gray-900 border-b border-white/20 backdrop-blur">
      <div className="flex items-center h-full px-2">
        <IconButton icon={Menu} label="Menu" />
        <img src="/api/placeholder/75/32" alt="Logo" className="h-8 ml-8" />
        
        <div className="flex items-center space-x-4 ml-4">
          <NavItem label="ワークスペース" />
          <NavItem label="最近" />
          <NavItem label="スター付き" />
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <Input 
            iconImage={Search}
            placeholder="検索"
            className="w-48"
          />
          <IconButton icon={Settings} label="Settings" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;