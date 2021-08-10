import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const history = useHistory();

  const handleRegister = () => {
    setEmail(emailRef.current.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setUsername(usernameRef.current.value);
    setPassword(passwordRef.current.value);
    try {
      await axios.post('/auth/register', { email, password, username });
      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='register'>
      <div className='register__top'>
        <div className='register__wrapper'>
          <img
            className='register__logo'
            src='https://ps.w.org/spotlight-social-photo-feeds/assets/icon-256x256.png?rev=2510613'
            alt=''
          />
          <button className='register__login-btn' onClick={() => history.push('/login')}>
            Sign In
          </button>
        </div>
      </div>
      <div className='register__container'>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        {!email ? (
          <div className='register__input'>
            <input type='email' placeholder='email address' ref={emailRef} />
            <button className='register__register-btn' onClick={handleRegister}>
              Get Started
            </button>
          </div>
        ) : (
          <form className='register__input'>
            <input type='username' placeholder='username' ref={usernameRef} />
            <input type='password' placeholder='password' ref={passwordRef} />
            <button className='register__register-btn' onClick={handleLogin}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
