// src/components/ErrorPage.tsx
import { FC } from "react";
// import { a } from 'react-router-dom';
import type { ErrorDetails } from "../types/error";
import PageLayout from "./common/PageLayout";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ErrorPageProps {
  error: ErrorDetails;
}

const ErrorPage: FC<ErrorPageProps> = ({ error }) => {
  return (
    <PageLayout>
      <Navbar isAuthenticated={true} />
      <main className="flex-grow container mx-auto px-4">
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <div className="text-center space-y-6">
            <h1
              className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 
              bg-clip-text text-transparent"
            >
              {error.code}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              {error.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-md mx-auto">
              {error.message}
            </p>
            {error.actionText && (
              <a
                // to={error.actionPath || '/'}
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg 
                  hover:bg-blue-700 transition-colors"
              >
                {error.actionText}
              </a>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </PageLayout>
  );
};

export default ErrorPage;
