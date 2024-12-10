import { useState } from 'react';
import Logo from './common/Logo';

interface NavbarProps {
  isAuthenticated?: boolean;
  customBg?: string;
  customActions?: Array<{
    label: string;
    onClick: () => void;
  }>;
}

const Navbar = ({ 
  isAuthenticated = false, 
  customBg = "bg-blue-600",
  customActions
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const defaultActions = [
    { label: 'Update Info', onClick: () => {} },
    { label: 'Verify Entry', onClick: () => {} },
    { label: 'Sign Out', onClick: () => {} },
  ];

  const loginAction = [
    { label: 'Login', onClick: () => {} }
  ];

  const actions = customActions || (isAuthenticated ? defaultActions : loginAction);
  const isSingleButton = actions.length === 1;

  return (
    <nav className={`${customBg} p-4`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className={`hidden md:flex ${isSingleButton ? 'ml-auto' : 'space-x-4'}`}>
            {actions.map((action) => (
              <button
                key={action.label}
                onClick={action.onClick}
                className={`px-4 py-2 text-white hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap
                  ${isSingleButton ? 'ml-4' : ''}`}
              >
                {action.label}
              </button>
            ))}
          </div>

          <button 
            className={`md:hidden text-white ${isSingleButton ? 'hidden' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {isSingleButton && (
            <button
              className="md:hidden px-4 py-2 text-white hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap"
              onClick={actions[0].onClick}
            >
              {actions[0].label}
            </button>
          )}
        </div>

        {isMenuOpen && !isSingleButton && (
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