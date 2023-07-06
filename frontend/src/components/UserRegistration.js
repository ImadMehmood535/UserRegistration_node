import React, { useState } from 'react';
import axios from "axios"
import "./UserRegistration.css"

const UserRegistration = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(value);
    setUser({
      ...user, [name]: value
    })
  }

 
  const handleSubmit = e => {
    e.preventDefault();
    console.log(user)

  }

  const register = () =>{
   
    axios.post("http://localhost:4000/api/register", user)
    .then((response) =>{
        alert("User Registered")
    }).catch((err) => alert("not created"))

  }



  return (
    <div className='register-user'>
     <div  className='registration-box'>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label> Name:
          <input
            placeholder='Enter your name'
            type='text'
            name='name'
            value={user.name}
            onChange={handleChange} />
        </label>

        <label> Email:
          <input
            placeholder='Enter your email'
            type='text'
            name='email'
            value={user.email}
            onChange={handleChange} />
        </label>

        <label> Password:
          <input
            placeholder='Enter your password'
            type='password'
            name='password'
            value={user.password}
            onChange={handleChange} />
        </label>

        <button type="submit" onClick={register}>Register</button>

      </form>
      </div>
    </div>
  );
};

export default UserRegistration;