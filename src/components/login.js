//login.js

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from './loginslice'
import './login.css'

const Login = () =>  {
  const dispatch = useDispatch();
        const navigate = useNavigate();
        
        const [formData, setFormData] = useState({ username: '', password: '' });
      
        const handleChange= (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          dispatch(loginUser(formData));
        };
        const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
        if (isAuthenticated) {
        navigate('/dashboard'); // Redirect to home page
        }

        return (
          <div className="login-container">
              <h2> Login</h2>
              <form  onSubmit={handleSubmit}>
                  <div >
                      <label className="label">Username:</label>
                      <input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          className="input"
                      />
                  </div>
                  <div >
                      <label className="label">Password:</label>
                      <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className="input"
                      />
                  </div>
                  <button type="submit"  className="button">Login</button>
              </form>
          </div>
      );
  }
  
  export default Login;