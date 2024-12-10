import React from 'react';

const Navbar = () => {
  const actions = [
    { label: 'Update Info', onClick: () => {} },
    { label: 'Verify Entry', onClick: () => {} },
    { label: 'Sign Out', onClick: () => {} },
  ];

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="Library Logo" className="h-10" />
        </div>
        <div className="flex space-x-4">
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
      </div>
    </nav>
  );
};

export default Navbar;