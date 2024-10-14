import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [regNumber, setRegNumber] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [department, setDepartment] = useState('');
  const [level, setLevel] = useState('');
  const [regNumberFound, setRegNumberFound] = useState(true); // Simulate if regNumber is found

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted reg number:', regNumber);

    if (regNumber === '12345') {
      setRegNumberFound(true);
      navigate('/success');
    } else {
      setRegNumberFound(false);
    }
  };

  return (
    <div className="container">
      <div className='upper'></div>
      <div className="right-side">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>{regNumberFound ? 'Login' : 'Register'}</h2>
          <div className="input-group">
            <label htmlFor="regNumber">Registration Number</label>
            <input
              type="text"
              id="regNumber"
              value={regNumber}
              onChange={(e) => setRegNumber(e.target.value)}
              required
            />
          </div>

          {!regNumberFound && (
            <>
              <div className="input-group">
                <label htmlFor="name">Names</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              

              <div className="input-group">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  id="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="level">Level</label>
                <input
                  type="text"
                  id="level"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          <button type="submit">
            {regNumberFound ? 'Login' : 'Register'}
          </button>
        </form>
      </div>
      
      <div className="left-side">
        <h1 className="welcome-text">Welcome To UR Library</h1>
      </div>
    </div>
  );
};

export default Login;
