import React from 'react';
import { useRouteError } from 'react-router-dom';

const Errors = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-content">
          <h1 className="error-title">Oops! 😅</h1>
          <h2 className="error-subtitle">
            {error.status === 404 ? "Page Not Found" : "Something went wrong"}
          </h2>
          <p className="error-message">
            {error.status === 404 
              ? "The page you're looking for doesn't exist." 
              : "We're working on fixing this issue. Please try again later."
            }
          </p>
          <div className="error-details">
            <p><strong>Error:</strong> {error.statusText || error.message}</p>
            <p><strong>Status:</strong> {error.status || "Unknown"}</p>
          </div>
          <div className="error-actions">
            <button 
              className="error-btn primary" 
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
            <button 
              className="error-btn secondary" 
              onClick={() => window.location.href = '/'}
            >
              Go Home
            </button>
          </div>
        </div>
        <div className="error-image">
          <img 
            src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Error" 
          />
        </div>
      </div>
    </div>
  );
};

export default Errors;