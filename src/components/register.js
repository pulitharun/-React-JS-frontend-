//register.js

import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 
import "./register.css"

const Register = () => {
  const [formData, setFormData] = useState({
    first_name : '',
    last_name: '',
    address: '',
    email: '',
    phone: '',
    username: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/register', formData)
      .then(response => {
        console.log('Registration successful:', response.data);
        
        navigate('/login');
      })
      .catch(error => {
        console.log('gh');
        setErrorMessage(true);
      });
  };

  return (
    <div>
      <h2>Register</h2>
       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} 
      <form onSubmit={handleSubmit}>
      <div>
          <label className="label">First Name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="label">Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="label">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="label">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="label">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label  className="label">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
