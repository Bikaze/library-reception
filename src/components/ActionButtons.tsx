import React from 'react';

interface ActionButtonsProps {
  isMobile: boolean;
  onScanClick: () => void;
  isScanning: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ isMobile, onScanClick, isScanning }) => {
  const actions = [
    { label: 'Update Info', onClick: () => {} },
    { 
      label: isScanning ? 'Scanning...' : 'Verify Entry', 
      onClick: onScanClick,
      disabled: isScanning 
    },
    { label: 'Sign Out', onClick: () => {} },
  ];

  if (isMobile) {
    return (
      <div className="mt-4">
        <nav className="text-sm breadcrumbs mb-2">
          <ul>
            <li>Actions</li>
          </ul>
        </nav>
        <div className="flex flex-col space-y-2">
          {actions.map((action) => (
            <a
              key={action.label}
              href="#"
              onClick={action.onClick}
              className={`text-blue-600 hover:underline ${action.disabled ? 'opacity-50 pointer-events-none' : ''}`}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex space-x-4 mt-4">
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={action.onClick}
          disabled={action.disabled}
          className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${
            action.disabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;