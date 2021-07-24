import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneIphone,
} from '@material-ui/icons';
import React from 'react';

const User = () => {
  return (
    <div className='user'>
      <div className='user__title-container'>
        <h1 className='user__title'>Edit User</h1>
        <button className='user__add-btn'>Create</button>
      </div>

      <div className='user__container'>
        <div className='user__show'>
          <div className='user__top'>
            <img
              className='user__image'
              src='https://images.unsplash.com/photo-1549820610-ec7475b33969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              alt=''
            />
            <div className='user__header'>
              <span className='user__username'>John Owens</span>
              <span className='user__user-title'>Software Engineer</span>
            </div>
          </div>

          <div className='user__bottom'>
            <span className='user__details'>Account Details</span>
            <div className='user__info-container'>
              <PermIdentity className='user__icon' />
              <span className='user__info'>lebronjames99</span>
            </div>
            <div className='user__info-container'>
              <CalendarToday className='user__icon' />
              <span className='user__info'>01.09.1989</span>
            </div>
            <span className='user__details'>Contact Details</span>
            <div className='user__info-container'>
              <PhoneIphone className='user__icon' />
              <span className='user__info'>+1 123 4567</span>
            </div>
            <div className='user__info-container'>
              <MailOutline className='user__icon' />
              <span className='user__info'>lebronjames99@gmail.com</span>
            </div>
            <div className='user__info-container'>
              <LocationSearching className='user__icon' />
              <span className='user__info'>San Francisco | USA </span>
            </div>
          </div>
        </div>

        <div className='user__update'>
          <span className='user__update-title'>Edit</span>
          <form className='user__update-form'>
            <div className='user__form-left'>
              <div className='user__form-item'>
                <label>Username</label>
                <input type='text' placeholder='username' className='user__input' />
              </div>
            </div>
            <div className='user__form-right'></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
