import { FC } from 'react';

const Header: FC = () => {
  return (
    <div className="flex items-center justify-between p-3 md:p-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 md:gap-4">
        <img src="/logo.png" alt="Library Logo" className="h-6 w-6 md:h-10 md:w-10" />
        <h1 className="text-lg md:text-2xl font-bold text-white">Library Reception</h1>
      </div>
      <button className="px-3 py-1 text-white border-2 border-white rounded-full hover:bg-white hover:text-blue-600 transition-colors text-xs md:text-base">
        Sign In
      </button>
    </div>
  );
};

export default Header;