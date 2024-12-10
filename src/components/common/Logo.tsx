import { FC } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = '' }) => {
  return (
    <a href="#" className="flex items-center gap-2 md:gap-4">
      <img 
        src="/logo.png" 
        alt="Library Logo" 
        className={`h-6 w-6 md:h-10 md:w-10 ${className}`} 
      />
      <h1 className="text-white text-lg md:text-xl font-semibold">
        Library Reception
      </h1>
    </a>
  );
};

export default Logo;