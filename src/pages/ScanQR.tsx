import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Scanner from '../components/Scanner';
import Footer from '../components/Footer';

const ScanQR = () => {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = (data: string | null) => {
    if (data) {
      toast.success('QR Code detected!');
      setIsScanning(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Scanner onScan={handleScan} isActive={isScanning} />
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsScanning(!isScanning)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isScanning ? 'Stop Scanning' : 'Start Scanning'}
          </button>
        </div>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ScanQR;