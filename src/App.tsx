import Header from './components/Header';
import Footer from './components/Footer';
import { FiBook, FiClock, FiUsers } from 'react-icons/fi';

const App = () => {
  const cards = [
    {
      icon: <FiBook className="w-8 h-8" />,
      title: "Extensive Collection",
      description: "Access thousands of books across various genres"
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: "24/7 Access",
      description: "Browse and reserve books anytime, anywhere"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Community",
      description: "Join reading groups and connect with fellow readers"
    }
  ];

  return (
    <div className="min-h-screen grid grid-rows-[auto,1fr,auto]">
      <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 h-[50vh]">
        <Header />
        <div className="flex flex-col items-center justify-center h-[calc(100%-5rem)] px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Welcome to Our Library
          </h2>
          <p className="text-white text-center text-lg max-w-2xl">
            Discover millions of books and resources at your fingertips
          </p>
        </div>
      </div>
      
      <div className="bg-white p-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Start Your Reading Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div key={index} className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">{card.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default App;