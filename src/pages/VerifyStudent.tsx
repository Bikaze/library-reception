import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QRScanner from '../components/QRScanner';
import PageLayout from '../components/common/PageLayout';
import PageHeader from '../components/common/PageHeader';

const VerifyStudent = () => {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = (data: string | null) => {
    if (data) {
      toast.success('QR Code detected!');
      setIsScanning(false);
    }
  };

  return (
    <PageLayout>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <PageHeader title="Verify Student" />
        <QRScanner 
          onScan={handleScan}
          isScanning={isScanning}
          setIsScanning={setIsScanning}
        />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" />
    </PageLayout>
  );
};

export default VerifyStudent;