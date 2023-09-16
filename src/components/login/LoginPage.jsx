import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Road Map FE:

/**
 *
 * Code giao dien khong co logic
 * tim hieu them ve scss, tailwinds css
 * Tim hieu cac hook don gian (useState, useEffect)
 * Call API GEt, post, delete, patch
 * Lam cac logic kho (vi du nhu add to cart, lam lien quan den cookie,...)
 */

function LoginPage() {
  const [userData, setUserData] = useState([]);
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:8000/users')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };
  console.log(userData);
  console.log(loginData);
  const handleSubmit = (event) => {
    event.preventDefault();

    const user = userData.find(
      (user) => user.username === loginData.username && user.password === loginData.password,
    );
    console.log(user);
    if (user) {
      // Login successful, you can perform further actions here
      axios
        .patch(`http://localhost:8000/users/${user.id}`, {
          isLogin: true,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
      localStorage.setItem('isLoginId', user.id);
      console.log('Đăng nhập thành công:', user);
      navigate('/');
    } else {
      // Invalid credentials
      console.log('Sai thông tin đăng nhập');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={loginData.username}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <button type="submit">Login</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}

export default LoginPage;
