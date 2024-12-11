// src/pages/VerificationResult.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageLayout from '../components/common/PageLayout';

const VerificationResult = () => {
  const studentInfo = {
    firstName: "John",
    otherName: "Doe",
    regNo: "220012345",
    imageUrl: "https://avatars.githubusercontent.com/u/96583873?v=4"
  };

  return (
    <PageLayout>
      <Navbar isAuthenticated={true} customBg="bg-blue-600" />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto transform hover:scale-[1.01] transition-all duration-300">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] overflow-hidden">
            <div className="p-6 md:p-8 w-full">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden flex-shrink-0 
                  ring-4 ring-blue-500 ring-offset-4 ring-offset-white shadow-2xl">
                  <img 
                    src={studentInfo.imageUrl} 
                    alt="Student"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400?text=Student+Photo';
                    }}
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 
                    bg-clip-text text-transparent mb-4 md:mb-6">
                    Student Information
                  </h2>
                  <div className="space-y-3 md:space-y-4">
                    <div className="transform hover:-translate-y-0.5 transition-transform">
                      <label className="text-gray-600 font-medium block text-base md:text-lg lg:text-xl mb-1">Names:</label>
                      <p className="text-gray-800 text-lg md:text-xl lg:text-2xl font-semibold">
                        {studentInfo.firstName} {studentInfo.otherName}
                      </p>
                    </div>
                    <div className="transform hover:-translate-y-0.5 transition-transform">
                      <label className="text-gray-600 font-medium block text-base md:text-lg lg:text-xl mb-1">Registration No:</label>
                      <p className="text-gray-800 text-lg md:text-xl lg:text-2xl font-semibold">{studentInfo.regNo}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PageLayout>
  );
};

export default VerificationResult;