import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="w-full bg-white py-3 md:py-4 text-center text-gray-600 text-sm md:text-base border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; 2024 Library Reception. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;