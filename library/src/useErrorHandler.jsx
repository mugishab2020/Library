import { useState } from 'react';
import { useQueryErrorResetBoundary } from 'react-query';

export const useErrorHandler = () => {
  const [error, setError] = useState(null);
  const { reset } = useQueryErrorResetBoundary();

  const handleError = (error) => {
    setError(error);
    console.error('Error occurred:', error);  // Optional: Add logging here
  };

  const clearError = () => {
    setError(null);
    reset();
  };

  return {
    error,
    handleError,
    clearError
  };
};
