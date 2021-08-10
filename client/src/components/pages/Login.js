import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
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
            src='https://ps.w.org/spotlight-social-photo-feeds/assets/icon-256x256.png?rev=2510613'
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
            New to Spotlight?{' '}
            <Link to='/register/'>
              <b>Sign up now.</b>
            </Link>
          </span>
          <small>
            <Link to='/admin/login'>Admin Login</Link>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
