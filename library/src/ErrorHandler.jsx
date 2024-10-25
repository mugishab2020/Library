import React, { useState } from 'react';

// Custom hook for handling errors
export const useErrorHandler = () => {
  const [error, setError] = useState(null);

  // Function to handle errors
  const handleError = (err) => {
    const message =
      err?.response?.data?.message || err?.message || 'Something went wrong';
    setError({ message });
  };

  // Function to clear errors
  const clearError = () => {
    setError(null);
  };

  return {
    error,
    handleError,
    clearError,
  };
};

// Component to display error messages
export const ErrorMessage = ({ error, onRetry }) => {
  if (!error) return null; // Don't display anything if there's no error

  return (
    <div className="error-message">
      <p>{error.message}</p>
      {onRetry && (
        <button onClick={onRetry} className="retry-button">
          Retry
        </button>
      )}
    </div>
  );
};
