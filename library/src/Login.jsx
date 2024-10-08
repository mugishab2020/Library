import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const navigates = ()=>{
        navigate('/success')

    }
  return (
    <div>
        <h1>Input your Student ID</h1>
      <form action="">
        <input type="text" name='reg_number' placeholder='Student ID' />
        <br />
        <button type="submit" onClick={navigates}>Submit</button>
      </form>
    </div>
  )
}

export default Login
