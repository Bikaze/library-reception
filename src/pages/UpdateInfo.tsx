// src/pages/UpdateInfo.tsx
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import PageHeader from '../components/common/PageHeader';
import type { StudentDetails } from '../types/student';

const UpdateInfo = () => {
  throw new Error('This is a test error');
  const [searchRegNo, setSearchRegNo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [studentData, setStudentData] = useState<StudentDetails | null>(null);
  const [formData, setFormData] = useState<StudentDetails | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      const mockData: StudentDetails = {
        regNo: searchRegNo,
        firstName: "John",
        otherName: "Doe",
        department: "Computer Science",
        school: "School of ICT",
        gender: "Male",
        level: 3,
        photo: "https://avatars.githubusercontent.com/u/96583873?v=4"
      };
      
      setStudentData(mockData);
      setFormData(mockData);
      setIsLoading(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (formData) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
        if (formData) {
          setFormData({
            ...formData,
            photo: reader.result as string
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      toast.success('Student information updated successfully!');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <PageHeader title="Update User Information" />
      {!studentData ? (
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Registration Number
              </label>
              <input
                type="text"
                value={searchRegNo}
                onChange={(e) => setSearchRegNo(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter registration number"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </form>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center mb-6">
              <div className="relative w-32 h-32">
                <img
                  src={photoPreview || formData?.photo}
                  alt="Student"
                  className="w-full h-full rounded-full object-cover ring-4 ring-blue-500 ring-offset-4"
                />
                <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="hidden"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </label>
              </div>
            </div>
            
            {Object.entries(formData || {}).map(([key, value]) => {
              if (key === 'photo') return null;
              return (
                <div key={key}>
                  <label className="block text-gray-700 font-medium mb-2 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  {key === 'gender' ? (
                    <select
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  ) : key === 'level' ? (
                    <select
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {[1,2,3,4,5].map(level => (
                        <option key={level} value={level}>Year {level}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  )}
                </div>
              );
            })}
            
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {isLoading ? 'Updating...' : 'Update Information'}
              </button>
            </div>
          </form>
        </div>
      )}
      <ToastContainer position="bottom-right" />
    </main>
  );
};

export default UpdateInfo;