// src/components/ErrorBoundary.tsx
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ErrorBoundary = () => {
  const error = useRouteError();
  let errorDetails = {
    code: 500,
    title: 'Server Error',
    message: 'Something went wrong on our end.',
  };

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorDetails = {
        code: 404,
        title: 'Page Not Found',
        message: 'The page you are looking for might have been removed or is temporarily unavailable.',
      };
    }
  } else if (error instanceof Error) {
    errorDetails = {
      code: 500,
      title: 'Application Error',
      message: error.message,
    };
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated={false} customBg="bg-blue-600" />
      <main className="flex-grow container mx-auto px-4">
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 
              bg-clip-text text-transparent">
              {errorDetails.code}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              {errorDetails.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-md mx-auto">
              {errorDetails.message}
            </p>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg 
                hover:bg-blue-700 transition-colors"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorBoundary;