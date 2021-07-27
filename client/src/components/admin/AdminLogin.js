import React, { useContext, useState } from 'react';
import { adminLoginApi } from '../context/authContext/AuthApi';
import { AuthContext } from '../context/authContext/AuthContext';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    adminLoginApi({ email, password }, dispatch);
  };

  return (
    <div className='adminlogin'>
      <form className='adminlogin__form'>
        <input
          className='adminlogin__input'
          type='email'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='adminlogin__input'
          type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='adminlogin__btn' onClick={handleLogin} disabled={isFetching}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
