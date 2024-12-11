// src/layouts/RootLayout.tsx
import { FC, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import type { AuthContext } from '../types/auth';

const RootLayout: FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleAuthChange = (status: boolean) => {
    setIsAuthenticated(status);
    if (status) {
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  const contextValue: AuthContext = {
    onAuthChange: handleAuthChange
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        isAuthenticated={isAuthenticated}
        customBg="bg-blue-600"
        onSignOut={() => handleAuthChange(false)}
      />
      <Outlet context={contextValue} />
      <Footer />
    </div>
  );
};

export default RootLayout;