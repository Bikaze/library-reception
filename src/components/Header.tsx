import { FC } from 'react';

const Header: FC = () => {
  return (
    <div className="flex items-center justify-between p-4 md:p-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-4">
        <img src="/library-logo.png" alt="Library Logo" className="h-12 w-12" />
        <h1 className="text-2xl font-bold text-white">Library Reception</h1>
      </div>
      <div className="flex gap-4">
        <button className="px-6 py-2 text-white border-2 border-white rounded-full hover:bg-white hover:text-blue-600 transition-colors">
          Sign In
        </button>
        <button className="px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-opacity-90 transition-colors">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;