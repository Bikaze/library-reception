import { FC } from "react";

interface ScanButtonProps {
  isScanning: boolean;
  onClick: () => void;
}

const ScanButton: FC<ScanButtonProps> = ({ isScanning, onClick }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={onClick}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        {isScanning ? "Stop Scanning" : "Scan QR Code"}
      </button>
    </div>
  );
};

export default ScanButton;
