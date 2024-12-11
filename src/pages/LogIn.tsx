// src/pages/LogIn.tsx
import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QRScanner from '../components/QRScanner';
import PageHeader from '../components/common/PageHeader';
import type { AuthContext } from '../types/auth';

interface LoginInfo {
  username: string;
  role: string;
}

const LogIn = () => {
  const [isScanning, setIsScanning] = useState(false);
  const navigate = useNavigate();
  const { onAuthChange } = useOutletContext<AuthContext>();

  const handleScan = (data: string | null) => {
    if (data) {
      const mockLoginData: LoginInfo = {
        username: "John Doe",
        role: "student"
      };
      
      setIsScanning(false);
      toast.success('QR Code detected! Logging in...');
      
      setTimeout(() => {
        onAuthChange(true);
        navigate('/');
      }, 1000);
    }
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <PageHeader title="Log In" />
      <div className="max-w-md mx-auto">
        <p className="text-center text-gray-600 mb-8">
          Please scan your QR code to log in
        </p>
        <QRScanner 
          onScan={handleScan}
          isScanning={isScanning}
          setIsScanning={setIsScanning}
        />
      </div>
      <ToastContainer position="bottom-right" />
    </main>
  );
};

export default LogIn;