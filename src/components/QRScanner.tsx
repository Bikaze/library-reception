import { FC } from 'react';
import Scanner from './Scanner';
import ScanButton from './ScanButton';

interface QRScannerProps {
  onScan: (data: string | null) => void;
  isScanning: boolean;
  setIsScanning: (scanning: boolean) => void;
}

const QRScanner: FC<QRScannerProps> = ({ onScan, isScanning, setIsScanning }) => {
  return (
    <div>
      <Scanner onScan={onScan} isActive={isScanning} />
      <ScanButton 
        isScanning={isScanning}
        onClick={() => setIsScanning(!isScanning)}
      />
    </div>
  );
};

export default QRScanner;