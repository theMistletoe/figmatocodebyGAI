import React from 'react';
import { Plus } from 'lucide-react';
import { List } from '../types';
import Navigation from '../organisms/Navigation';
import BoardHeader from '../organisms/BoardHeader';
import TaskList from '../organisms/TaskList';
import Button from '../atoms/Button';

interface BoardTemplateProps {
  lists: List[];
  onAddCard: (listId: number) => void;
  onAddList: () => void;
  onCardClick: (listId: number, cardId: number) => void;
  onShare?: () => void;
}

const BoardTemplate: React.FC<BoardTemplateProps> = ({ 
  lists, 
  onAddCard, 
  onAddList,
  onCardClick,
  onShare 
}) => {
  return (
    <div className="w-full min-h-screen bg-slate-800">
      <Navigation />
      <BoardHeader title="TODO" onShare={onShare} />
      
      <div className="flex p-4 space-x-4 overflow-x-auto">
        {lists.map(list => (
          <TaskList
            key={list.id}
            list={list}
            onAddCard={onAddCard}
            onCardClick={onCardClick}
          />
        ))}

        <Button 
          variant="primary" 
          className="h-10 whitespace-nowrap"
          onClick={onAddList}
        >
          <Plus className="w-4 h-4 mr-2" />
          もう1つリストを追加
        </Button>
      </div>
    </div>
  );
};

export default BoardTemplate;