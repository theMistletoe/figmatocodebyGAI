import React, { useState } from 'react';
import { List, Card } from '../types';
import BoardTemplate from '../templates/BoardTemplate';

const initialLists: List[] = [
  {
    id: 1,
    title: 'TODO',
    cards: [{ id: 1, title: 'タスクタイトル' }]
  },
  {
    id: 2,
    title: 'Doing',
    cards: [{ id: 2, title: 'タスクタイトル' }]
  },
  {
    id: 3,
    title: 'Done!',
    cards: [{ id: 3, title: 'タスクタイトル' }]
  }
];

const Board: React.FC = () => {
  const [lists, setLists] = useState<List[]>(initialLists);

  const handleAddCard = (listId: number) => {
    setLists(lists.map(list => {
      if (list.id === listId) {
        const newCard: Card = {
          id: Math.max(...list.cards.map(c => c.id)) + 1,
          title: 'New Task'
        };
        return {
          ...list,
          cards: [...list.cards, newCard]
        };
      }
      return list;
    }));
  };

  const handleAddList = () => {
    const newList: List = {
      id: Math.max(...lists.map(l => l.id)) + 1,
      title: `List ${lists.length + 1}`,
      cards: []
    };
    setLists([...lists, newList]);
  };

  const handleCardClick = (listId: number, cardId: number) => {
    // Implement card detail modal/drawer logic here
    console.log(`Clicked card ${cardId} in list ${listId}`);
  };

  const handleShare = () => {
    // Implement share logic here
    console.log('Share button clicked');
  };

  return (
    <BoardTemplate
      lists={lists}
      onAddCard={handleAddCard}
      onAddList={handleAddList}
      onCardClick={handleCardClick}
      onShare={handleShare}
    />
  );
};

export default Board;