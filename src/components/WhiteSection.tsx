import { FiBook, FiClock } from 'react-icons/fi';
import { BsClipboardData } from "react-icons/bs";
import { BsQrCodeScan } from "react-icons/bs"

const WhiteSection = () => {
  const cards = [
    {
      icon: <BsQrCodeScan className="w-6 h-6 md:w-7 md:h-7" />,
      title: "KUGENZURA",
      description: "Reba ko uwinjira yabisabiye uburenganzira"
    },
    {
      icon: <BsClipboardData className="w-6 h-6 md:w-7 md:h-7" />,
      title: "GUHINDURA AMAKURU",
      description: "Hindura amakuru y'uwinjira mu gihe hari amakosa mu myirondoro"
    }
  ];

  return (
    <div className="bg-white p-4 md:p-6 w-full">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          IBIKORWA
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-gray-50 h-[200px] md:h-[250px] flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-4">{card.icon}</div>
                <h4 className="text-xl md:text-2xl font-semibold">{card.title}</h4>
              </div>
              <p className="text-gray-600 text-base md:text-lg">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhiteSection;