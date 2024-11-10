export const SearchBar: React.FC = () => {
  return (
    <div className="relative w-[215px] h-10">
      <input
        type="text"
        placeholder="検索..."
        className="w-full h-full px-8 py-2 bg-white rounded-md border border-zinc-200
          text-zinc-500 text-[13px] font-normal font-['Inter']
          focus:outline-none focus:ring-2 focus:ring-zinc-200"
      />
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2" />
    </div>
  );
};

const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    className={`w-4 h-4 text-zinc-500 ${className}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
); 