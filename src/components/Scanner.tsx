import { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { BsQrCodeScan } from "react-icons/bs";

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
        aspectRatio: 1,
        // Remove fixed qrbox size to let it use container dimensions
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
          .catch((error) => console.error("Error stopping scanner:", error));
      }
    };
  }, [onScan, isActive]);

  return (
    <div className="max-w-[280px] mx-auto">
      {" "}
      {/* Reduced max-width */}
      <div className="rounded-lg overflow-hidden border-4 border-blue-500 aspect-square">
        <div id="reader" className="w-full h-full">
          {!isActive && (
            <div className="h-full flex items-center justify-center text-gray-400">
              <BsQrCodeScan size={45} /> {/* Reduced to 24px */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scanner;
