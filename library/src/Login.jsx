import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './Login.css';
import { isError } from 'react-query';
import { click } from '@testing-library/user-event/dist/click';
import ErrorPage from './ErrorPage'

const apiKey = process.env.REACT_APP_MOCK_API_KEY;

// fetching data from backend to register the user
const checkRegNumber = async (regNumber) => {
  const { data } = await axios.get(`https://${apiKey}.mockapi.io/users?regNumber=${regNumber}`);
  return data; 
};

// Registering the user if reg number entered is not valid or registered already
const registerUser = async (userDetails) => {
  const { data } = await axios.post(`https://${apiKey}.mockapi.io/users`, userDetails, {
  });
  return data; 
};

const Login = () => {
  const navigate = useNavigate();
  const [regNumber, setRegNumber] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [department, setDepartment] = useState('');
  const [level, setLevel] = useState('');
  const [regNumberFound, setRegNumberFound] = useState(true);
  const [clicked, setClicked] = useState(false);
  
  
  const { data, refetch, isFetching, error } = useQuery({
   queryKey: ['checkRegNumber', regNumber],
   queryFn: () => checkRegNumber(regNumber),
   enabled: clicked, // disabling automatic fetch on mount  
 });

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setClicked(true); // enabling the query
    const {data: fetchedData} = await refetch(); 
    console.log(fetchedData)
    console.log(fetchedData.id)
    if(fetchedData?.length > 0){
      setRegNumberFound(true);
      navigate(`/success?refId=${fetchedData[0].refId}`);
    }
    else {
      setRegNumberFound(false);
      //spliting name into first and last name from one input field
     const [firstName, lastName = ''] = name.split(' ').slice(0, 2);
    
      // Creating the new user object to be register in the database
      const newUserDetails = {
        regNumber,
        firstName,
        lastName,
        gender,
        department,
        level,
      };

      

     if(level){
      try {
        const registerResponse = await registerUser(newUserDetails);
        console.log('Registration successful:', registerResponse);
        navigate(`/success?refId=${data.refId}`);
      } catch (error) {
        console.error('Error during registration:', error);
      }
     }
    }
    setClicked(false); // Resetting clicked to prevent unnecessary fetches
  };

   // Render the error page if there's a 500 error
   if (error?.response?.status === 500) {
    return <ErrorPage err={error} />;
  }
  return (
    <>
      {/*<div style={{ marginBottom: 30 }}>
        <div className="success__top">
          <h1 className="success__title">Login to our Entrance</h1>
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
      </div>*/}

      <div className="container">
        <div className="upper"></div>

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

            <button type="submit"  disabled={isFetching} >
              {isFetching ? (regNumberFound ? 'Checking...': 'Registering...') : (regNumberFound ? 'Login' : 'Register')}
            </button>

             {/* {error && <p className="error-message">Error fetching data: {error.message} </p>} */} 
          </form>
        </div>

        <div className="left-side">
          <h1 className="welcome-text">Welcome To UR Library</h1>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} UR Library. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Login;
