import React from 'react';
import { Card } from '../types';

interface TaskCardProps {
  card: Card;
  onClick?: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ card, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg p-3 mb-2 shadow-sm hover:bg-gray-50 cursor-pointer"
    >
      <p className="text-gray-800">{card.title}</p>
      {card.description && (
        <p className="text-gray-500 text-sm mt-1">{card.description}</p>
      )}
      {card.labels && card.labels.length > 0 && (
        <div className="flex gap-1 mt-2">
          {card.labels.map((label, index) => (
            <span 
              key={index}
              className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded"
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskCard;