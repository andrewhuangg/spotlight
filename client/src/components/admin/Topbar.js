import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbar__wrapper'>
        <div className='topbar__left'>
          <Link to='/admin'>
            <span className='topbar__logo'>spotlightadmin</span>
          </Link>
        </div>
        <div className='topbar__right'>
          <div className='topbar__icons-container'>
            <NotificationsNone />
            <span className='topbar__badge'>2</span>
          </div>
          <div className='topbar__icons-container'>
            <Language />
            <span className='topbar__badge'>2</span>
          </div>
          <div className='topbar__icons-container'>
            <Settings />
          </div>
          <img
            src='https://images.unsplash.com/photo-1549820610-ec7475b33969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            alt=''
            className='topbar__avatar'
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
