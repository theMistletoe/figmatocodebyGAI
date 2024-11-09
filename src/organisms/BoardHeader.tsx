import React from 'react';
import { Share2 } from 'lucide-react';
import Button from '../atoms/Button';

interface BoardHeaderProps {
  title: string;
  onShare?: () => void;
}

const BoardHeader: React.FC<BoardHeaderProps> = ({ title, onShare }) => {
  return (
    <div className="bg-black/25 backdrop-blur-sm p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-white font-bold">{title}</h1>
          <Button variant="secondary">ボード</Button>
          <Button onClick={onShare}>
            <Share2 className="w-4 h-4 mr-2" />
            共有する
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BoardHeader;