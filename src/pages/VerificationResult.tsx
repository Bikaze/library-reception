// src/pages/VerificationResult.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageLayout from '../components/common/PageLayout';

const VerificationResult = () => {
  const studentInfo = {
    firstName: "John",
    otherName: "Doe",
    regNo: "220012345",
    imageUrl: "https://placeholder.co/400"
  };

  return (
    <PageLayout>
      <Navbar isAuthenticated={true} customBg="bg-blue-600" />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Student Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-600 font-medium block text-lg mb-1">Names:</label>
                    <p className="text-gray-800 text-xl">
                      {studentInfo.firstName} {studentInfo.otherName}
                    </p>
                  </div>
                  <div>
                    <label className="text-gray-600 font-medium block text-lg mb-1">Registration No:</label>
                    <p className="text-gray-800 text-xl">{studentInfo.regNo}</p>
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