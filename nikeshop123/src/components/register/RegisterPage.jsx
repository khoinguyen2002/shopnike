import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./RegisterPage.css";
function RegisterPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/users", {
        username: user.username,
        email: user.email,
        password: user.password,
        isLogin: false,
      })
      .then((response) => {
        console.log("Đăng ký thành công:", response.data);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Đăng ký lỗi:", error);
        // Handle registration error if necessary
      });
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={user.username}
            onChange={handleInputChange}
          />
          {errors.username && <div className='error'>{errors.username}</div>}
        </div>
        <br />
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={user.email}
            onChange={handleInputChange}
          />
          {errors.email && <div className='error'>{errors.email}</div>}
        </div>
        <br />
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={user.password}
            onChange={handleInputChange}
          />
          {errors.password && <div className='error'>{errors.password}</div>}
        </div>
        <br />
        <div>
          <label htmlFor='rePassword'>Re-Password</label>
          <input
            type='password'
            name='rePassword'
            placeholder='Re-Password'
            value={user.rePassword}
            onChange={handleInputChange}
          />
          {errors.rePassword && (
            <div className='error'>{errors.rePassword}</div>
          )}
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;