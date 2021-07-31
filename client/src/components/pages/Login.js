import React, { useContext, useState } from 'react';
import { userLoginApi } from '../context/authContext/AuthApi';
import { AuthContext } from '../context/authContext/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    userLoginApi({ email, password }, dispatch);
  };

  return (
    <div className='login'>
      <div className='login__top'>
        <div className='login__wrapper'>
          <img
            className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt=''
          />
        </div>
      </div>
      <div className='login__container'>
        <form className='login__form'>
          <h1>Sign In</h1>
          <input
            type='email'
            placeholder='Email or phone number'
            className='login__input'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='password'
            className='login__input'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='login__login-btn' onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>
            .
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
