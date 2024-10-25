import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [secretKey, setSecretKey] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const correctSecretKey = process.env.REACT_APP_ADMIN_SECRET_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (secretKey === correctSecretKey) {
      navigate('/admin-report');
    } else {
      setErrorMessage('Invalid secret key. Please try again.');
    }
  };

  return (
    <>
      <div style={{ marginBottom: 30 }}>
        <div className="success__top">
          <h1 className="success__title">Login to Admin Panel</h1>
          <div className="success__style-square success__style-square-big" />
          <div className="success__style-square success__style-square-small" />
          <div className="success__style-square-scaled">
            <div className="success__style-square success__style-square-big" />
            <div className="success__style-square success__style-square-small" />
          </div>
          <div className="success__style-square-one-two">
            <div className="success__style-square success__style-square-one" />
            <div className="success__style-square success__style-square-two" />
          </div>
        </div>
        <div className="success__style-square success__style-square-three" />
      </div>

      <div className="admin-login">
        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="input-group">
            <label htmlFor="secretKey">Admin Secret Key</label>
            <input
              type="password"
              id="secretKey"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              required
            />
          </div>

          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
      <footer className='footer'>
        <p>&copy; {new Date().getFullYear()} UR Library. All rights reserved.</p>
      </footer>
    </>
  );
};

export default AdminLogin;
