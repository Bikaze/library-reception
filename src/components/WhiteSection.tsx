import { BsClipboardData, BsQrCodeScan } from "react-icons/bs";
import { Link } from "react-router-dom";

const WhiteSection = () => {
  const cards = [
    {
      icon: <BsQrCodeScan className="w-6 h-6 md:w-7 md:h-7" />,
      title: "KUGENZURA",
      description: "Reba ko uwinjira yabisabiye uburenganzira",
      to: "/verify"
    },
    {
      icon: <BsClipboardData className="w-6 h-6 md:w-7 md:h-7" />,
      title: "GUHINDURA AMAKURU",
      description: "Hindura amakuru y'uwinjira mu gihe hari amakosa mu myirondoro",
      to: "/update"
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
            <Link 
              key={index}
              to={card.to}
              className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50
                shadow-[0_10px_20px_rgba(8,_112,_184,_0.4)]
                hover:shadow-[0_15px_30px_rgba(8,_112,_184,_0.6)]
                transition-all duration-300 transform hover:scale-[1.01]
                h-[200px] md:h-[250px] flex flex-col justify-center"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-4">{card.icon}</div>
                <h4 className="text-xl md:text-2xl font-semibold">{card.title}</h4>
              </div>
              <p className="text-gray-600 text-base md:text-lg">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhiteSection;