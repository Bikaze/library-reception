// Home.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlueSection from '../components/BlueSection';
import WhiteSection from '../components/WhiteSection';

const Home = () => {
  return (
    <div className="min-h-screen grid grid-rows-[50vh,1fr,auto]">
      <div className="bg-gradient-to-br from-purple-700 via-blue-600 to-blue-800">
        <Navbar 
          isAuthenticated={true}
          customBg="bg-transparent"
          // actions={[
          //   { 
          //     label: 'Login', 
          //     onClick: () => {
          //       // Add login logic later
          //     }
          //   }
          // ]}
        />
        <BlueSection />
      </div>
      <div>
        <WhiteSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;