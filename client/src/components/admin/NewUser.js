import React from 'react';

const NewUser = () => {
  return (
    <div className='newuser'>
      <h1 className='newuser__title'>New User</h1>
      <form className='newuser__form'>
        <div className='newuser__item'>
          <label>Username</label>
          <input type='text' placeholder='jonsnow99' />
        </div>
        <div className='newuser__item'>
          <label>Full Name</label>
          <input type='text' placeholder='jon snow' />
        </div>
        <div className='newuser__item'>
          <label>Email</label>
          <input type='email' placeholder='jonsnow@gmail.com' />
        </div>
        <div className='newuser__item'>
          <label>Password</label>
          <input type='password' placeholder='password' />
        </div>
        <div className='newuser__item'>
          <label>Phone</label>
          <input type='text' placeholder='+1 123 456 78' />
        </div>
        <div className='newuser__item'>
          <label>Address</label>
          <input type='text' placeholder='California | USA' />
        </div>
        <div className='newuser__item'>
          <label>Gender</label>
          <div className='newuser__gender'>
            <input type='radio' name='gender' id='male' value='male' />
            <label for='male'>Male</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label for='female'>Female</label>
            <input type='radio' name='gender' id='other' value='other' />
            <label for='other'>Other</label>
          </div>
        </div>
        <div className='newuser__item'>
          <label>Active</label>
          <select className='newuser__select' name='active' id='active'>
            <option>none selected</option>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='newuser__create-btn'>Create</button>
      </form>
    </div>
  );
};

export default NewUser;
