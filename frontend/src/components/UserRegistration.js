import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserRegistration.css';

const UserRegistration = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const register = () => {
    axios
      .post('http://localhost:4000/api/register', user)
      .then((response) => {
        const statusCode = response.status;
        if (statusCode === 201) {
          console.log(response);
          setAlertType('success');
          setAlertMessage(response.data.message);
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400 && err.response.data.errors) {
          const errorMessages = err.response.data.errors.map((err, index) => (
            <div key={index}>{err.msg}</div>
          ));
          setAlertType('danger');
          setAlertMessage(errorMessages);
        } else {
          setAlertType('danger');
        }
      });

    // Clear user input after registration
    setUser({
      name: '',
      email: '',
      password: ''
    });
  };

  return (
<div>
      {alertType && (
        <div className={`alert alert-${alertType} text-center`} role="alert">
          {alertMessage}
        </div>
      )}
      <div className="register-user">
        <div className="registration-box">
          <h1>Registration</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                placeholder="Enter your name"
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </label>

            <label>
              Email:
              <input
                placeholder="Enter your email"
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Password:
              <input
                placeholder="Enter your password"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </label>

            <button type="button" onClick={register}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;