// src/pages/Home.tsx
import BlueSection from '../components/BlueSection';
import WhiteSection from '../components/WhiteSection';

const Home = () => {
  return (
    <main className="flex-grow">
      <div className="bg-gradient-to-br from-purple-700 via-blue-600 to-blue-800">
        <BlueSection />
      </div>
      <div>
        <WhiteSection />
      </div>
    </main>
  );
};

export default Home;