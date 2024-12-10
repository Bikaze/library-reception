
import React from 'react';

interface ScannerControlsProps {
  isScanning: boolean;
  onStartScan: () => void;
  onStopScan: () => void;
}

const ScannerControls: React.FC<ScannerControlsProps> = ({
  isScanning,
  onStartScan,
  onStopScan,
}) => {
  return (
    <div className="flex justify-center mt-4">
      {!isScanning ? (
        <button
          onClick={onStartScan}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Start Scanning
        </button>
      ) : (
        <button
          onClick={onStopScan}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Stop Scanning
        </button>
      )}
    </div>
  );
};

export default ScannerControls;