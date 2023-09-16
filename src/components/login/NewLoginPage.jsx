import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Layout from '../Layout';
import { NavLink, useHistory } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { getDummyEmployee } from '../../apis/user-module';
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

  // Old way
  async function fetchPosts() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data;
  }

  const { data } = useQuery('posts', fetchPosts);

  const handleClickLogin = () => {
    loginMutation.mutate({
      userName: userName,
      passWord: passWord,
    });
  };

  const loginMutation = useMutation(
    async (payload) => {
      // Pass post api, but test show i call get api
      return await getDummyEmployee(payload);
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

          toast.success('Login successful!');
          history.push('/');
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
      {/* <div>
        <NavLink to={'/'}>
          <div className="text-blue-400">Back to home 1234</div>
        </NavLink>
        <div onClick={clickBackHome}>Back to home with click</div>
        <h1 className="text-blue">Login</h1>
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
          <button onClick={handleClickLogin}>Login</button>
        </div>
      </div> */}

      <div class="vh-100 d-flex">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid"
                alt="Sample image"
              />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <div>
                <div class="mb-4 form-outline">
                  <input
                    type="email"
                    id="form3Example3"
                    class="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <label class="form-label" for="form3Example3">
                    Email address
                  </label>
                </div>

                <div class="mb-3 form-outline">
                  <input
                    type="password"
                    id="form3Example4"
                    class="form-control form-control-lg"
                    placeholder="Enter password"
                    onChange={(e) => setPassWord(e.target.value)}
                  />
                  <label class="form-label" for="form3Example4">
                    Password
                  </label>
                </div>

                <div class="pt-2 mt-4 text-center text-lg-start">
                  <button onClick={handleClickLogin} type="button" class="btn btn-primary btn-lg">
                    Login
                  </button>
                  <p class="pt-1 mt-2 mb-0 small fw-bold">
                    Don't have an account?{' '}
                    <NavLink to="/register" class="link-danger">
                      Register
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLoginPage;
