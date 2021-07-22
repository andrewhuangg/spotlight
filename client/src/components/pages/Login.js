import React, { useRef, useState } from 'react';

const Login = () => {
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
          <input type='email' placeholder='Email or phone number' className='login__input' />
          <input type='password' placeholder='password' className='login__input' />
          <button className='login__login-btn'>Sign In</button>
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
