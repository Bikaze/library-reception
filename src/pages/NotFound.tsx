// src/pages/NotFound.tsx
import { errorTypes } from '../types/error';
import ErrorPage from '../components/ErrorPage';

const NotFound = () => {
  return <ErrorPage error={errorTypes['404']} />;
};

export default NotFound;