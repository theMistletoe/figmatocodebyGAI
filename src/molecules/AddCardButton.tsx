import React from 'react';
import { Plus } from 'lucide-react';

interface AddCardButtonProps {
  onClick: () => void;
}

const AddCardButton: React.FC<AddCardButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="flex items-center w-full p-2 text-gray-600 hover:bg-gray-200 rounded"
    >
      <Plus className="w-4 h-4 mr-2" />
      カードを追加
    </button>
  );
};

export default AddCardButton;