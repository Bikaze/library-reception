import Header from './components/Header';
import Footer from './components/Footer';
import BlueSection from './components/BlueSection';
import WhiteSection from './components/WhiteSection';

const App = () => {
  return (
    <div className="min-h-screen grid grid-rows-[50vh,1fr,auto]">
      <div className="bg-gradient-to-br from-purple-700 via-blue-600 to-blue-800">
        <Header />
        <BlueSection />
      </div>
      <div>
        <WhiteSection />
      </div>
      <Footer />
    </div>
  );
};

export default App;