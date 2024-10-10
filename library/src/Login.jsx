import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();

    const navigates = (event) => {
        event.preventDefault(); 
        navigate('/success');
    };
  return (
    <div className="container">
      <div className="left">
        <div className="left_content">
        </div>
      </div>

      <div className="right">
        <div className="form">
          <h2>Input student ID</h2>
          <input
            type="text"
            placeholder="Enter your student ID"
            required
          />
          <button onClick={navigates}>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
