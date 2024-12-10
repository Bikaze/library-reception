import { useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

interface ScannerProps {
  onScan: (data: string | null) => void;
  isActive: boolean;
}

const Scanner: React.FC<ScannerProps> = ({ onScan, isActive }) => {
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    scannerRef.current = new Html5Qrcode("reader");

    if (isActive) {
      const config = {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      };

      scannerRef.current
        .start(
          { facingMode: "environment" },
          config,
          (decodedText) => {
            onScan(decodedText);
          },
          () => {}
        )
        .catch((err) => {
          console.error(err);
        });
    }

    return () => {
      if (scannerRef.current && isActive) {
        scannerRef.current
          .stop()
          .catch(error => console.error("Error stopping scanner:", error));
      }
    };
  }, [onScan, isActive]);

  return (
    <div className="max-w-md mx-auto">
      <div className="rounded-lg overflow-hidden border-4 border-blue-600">
        <div id="reader" className="w-full">
          {!isActive && (
            <div className="p-4 text-center text-gray-500">
              Click 'Start Scanning' to begin
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scanner;