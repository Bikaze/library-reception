import { FC } from 'react';
import Logo from './common/Logo';

const Header: FC = () => {
  return (
    <div className="flex items-center justify-between p-3 md:p-6 max-w-7xl mx-auto">
      <Logo />
      <button className="px-3 py-1 text-white border-2 border-white rounded-full hover:bg-white hover:text-blue-600 transition-colors text-xs md:text-base">
        Injira
      </button>
    </div>
  );
};

export default Header;