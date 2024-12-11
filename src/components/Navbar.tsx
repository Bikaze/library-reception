// src/components/Navbar.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './common/Logo';

interface NavbarProps {
  isAuthenticated?: boolean;
  customBg?: string;
  onSignOut?: () => void;
}

const Navbar = ({ 
  isAuthenticated = false, 
  customBg = "bg-blue-600",
  onSignOut
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const defaultActions = [
    { label: 'Update Info', to: '/update' },
    { label: 'Verify Entry', to: '/verify' },
    { label: 'Sign Out', to: '#', onClick: onSignOut }
  ];

  const loginAction = [
    { label: 'Login', to: '/login' }
  ];

  const actions = isAuthenticated ? defaultActions : loginAction;
  const isSingleButton = actions.length === 1;

  return (
    <nav className={`${customBg} p-4`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className={`hidden md:flex ${isSingleButton ? 'ml-auto' : 'space-x-4'}`}>
            {actions.map((action) => (
              action.onClick ? (
                <button
                  key={action.label}
                  onClick={action.onClick}
                  className="px-4 py-2 text-white hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap"
                >
                  {action.label}
                </button>
              ) : (
                <Link
                  key={action.label}
                  to={action.to}
                  className="px-4 py-2 text-white hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap"
                >
                  {action.label}
                </Link>
              )
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
            <Link
              to={actions[0].to}
              className="md:hidden px-4 py-2 text-white hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap"
            >
              {actions[0].label}
            </Link>
          )}
        </div>

        {isMenuOpen && !isSingleButton && (
          <div className="mt-4 md:hidden">
            {actions.map((action) => (
              action.onClick ? (
                <button
                  key={action.label}
                  onClick={action.onClick}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-blue-700 rounded-lg transition-colors"
                >
                  {action.label}
                </button>
              ) : (
                <Link
                  key={action.label}
                  to={action.to}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-blue-700 rounded-lg transition-colors"
                >
                  {action.label}
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;