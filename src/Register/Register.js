import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const url = 'http://localhost:7000/api/user/register';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader
    const userData = { email, password };
    try {
      const register = await axios.post( url , userData);
      console.log(register);
      toast.success('Created successfully');
      if (register.status === 200) {
        console.log('User registered successfully');
        navigate('/login');
      } else {
        console.log('User registration failed:', register.data);
      }
    } catch (error) {
      console.error('An error occurred during registration:', error);
      toast.error('Not created');
    }
    setLoading(false); // Hide loader
    setEmail('');
    setPassword('');
  };

  return (
    <section>
      {loading && ( // Conditionally render loader
        <div className='overlay'>
          <div className='loader'></div>
        </div>
      )}
      <div className='container'>
        <div className='form'>
          <h2>Register</h2>
          <form onSubmit={registerUser}>
            <input
              type='email'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className='link'>
              <button className='--btn --btn-primary --btn-block' type='submit'>
                Register
              </button>
            </div>
            <p>--- or ---</p>
            <button className='--btn --btn-primary --btn-block'>
              <FaGoogle color='#fff' /> Login with Google
            </button>
          </form>

          <span className='register'>
            <p>Already have an account?</p>
            <Link to='/login'>Login</Link>
          </span>
        </div>
      </div>
    </section>
  );
};
export default Register;