import React, { useState } from 'react';
import { Search, Notifications, ArrowDropDown, AccountCircle } from '@material-ui/icons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className='navbar__container'>
        <div className='navbar__left'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt=''
          />
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className='navbar__right'>
          <Search className='navbar__icon' />
          <span>KID</span>
          <Notifications className='navbar__icon' />
          <AccountCircle />
          {/* replace account circle <image src='profile picture' alt='' /> */}
          <div className='navbar__profile'>
            <ArrowDropDown className='navbar__icon' />
            <div className='navbar__options' id='options'>
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
