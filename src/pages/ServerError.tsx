// src/pages/ServerError.tsx
import { errorTypes } from '../types/error';
import ErrorPage from '../components/ErrorPage';

const ServerError = () => {
  return <ErrorPage error={errorTypes['500']} />;
};

export default ServerError;