import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { List } from '../types';
import TaskCard from '../molecules/TaskCard';
import AddCardButton from '../molecules/AddCardButton';
import IconButton from '../atoms/IconButton';

interface TaskListProps {
  list: List;
  onAddCard: (listId: number) => void;
  onCardClick: (listId: number, cardId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ 
  list, 
  onAddCard, 
  onCardClick 
}) => {
  return (
    <div className="w-72 bg-gray-100 rounded-xl p-2">
      <div className="flex items-center justify-between p-2">
        <h2 className="font-semibold text-gray-800">{list.title}</h2>
        <IconButton icon={MoreHorizontal} label="More options" />
      </div>
      
      {list.cards.map((card) => (
        <TaskCard 
          key={card.id} 
          card={card}
          onClick={() => onCardClick(list.id, card.id)}
        />
      ))}
      
      <AddCardButton onClick={() => onAddCard(list.id)} />
    </div>
  );
};

export default TaskList;