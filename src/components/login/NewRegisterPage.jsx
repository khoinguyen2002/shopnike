import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Layout from '../Layout';
import { NavLink, useHistory } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { getDummyEmployee, registerNewAccount } from '../../apis/user-module';
import axios from 'axios';

// https://fullstack.edu.vn/courses/reactjs

function NewLoginPage() {
  const [userName, setUserName] = useState();
  const [passWord, setPassWord] = useState();
  const [listEmployee, setListEmployee] = useState();

  const history = useHistory();
  const handleClick = () => {
    toast.success('ABCD!');
  };

  const clickBackHome = () => {
    history.push('/');
  };

  // New way, improve by react-query
  //   const { data: dummyData } = useQuery(['dummyData'], async () => {
  //     const response = await getDummyEmployee();
  //     setListEmployee(response?.data);
  //     return response.data;
  //   });
  //   console.log('dummyDataL ', dummyData);

  const handleClickRegister = () => {
    registerMutation.mutate({
      userName: userName,
      passWord: passWord,
      email: 'fakeEmail@gmail.com',
    });
  };

  const registerMutation = useMutation(
    async (payload) => {
      // Pass post api, but test show i call get api
      return await registerNewAccount(payload);
    },
    {
      onSuccess: (data) => {
        if (data?.status >= 200 && data?.status < 300) {
          const loginData = data?.data;
          console.log('Login data: ', loginData);
          // Get role from api, don't get from account and password
          localStorage.setItem('role', 'admin');

          if (userName === 'admin') {
            localStorage.setItem('role', 'admin');
          } else {
            localStorage.setItem('role', 'user');
          }

          toast.success('Signup successful!');

          history.push('/login');
        } else {
          toast.error(
            data?.response?.data?.message || data?.message || 'Opps! Something went wrong...',
          );
        }
      },
    },
  );

  return (
    <div>
      <NavLink to={'/'}>
        <div className="text-blue-400">Back to home 1234</div>
      </NavLink>
      <div onClick={clickBackHome}>Back to home with click</div>
      <h1>Login</h1>
      <div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassWord(e.target.value)}
          />
        </div>
        <br />
        <button onClick={handleClickRegister}>Login</button>
        {/* <Link to="/register">Register</Link> */}
      </div>
    </div>
  );
}

export default NewLoginPage;
