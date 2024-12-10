import { useState } from 'react';
import Logo from './common/Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const actions = [
    { label: 'Update Info', onClick: () => {} },
    { label: 'Verify Entry', onClick: () => {} },
    { label: 'Sign Out', onClick: () => {} },
  ];

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {actions.map((action) => (
              <button
                key={action.label}
                onClick={action.onClick}
                className="px-4 py-2 text-white hover:bg-blue-700 rounded-lg transition-colors"
              >
                {action.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            {actions.map((action) => (
              <button
                key={action.label}
                onClick={action.onClick}
                className="block w-full text-left px-4 py-2 text-white hover:bg-blue-700 rounded-lg transition-colors"
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;