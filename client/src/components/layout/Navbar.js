import React, { useState, useEffect, useContext } from 'react';
import { ArrowDropDown, AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext/AuthContext';
import { logout } from '../context/authContext/AuthActions';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    };
    return () => (window.onscroll = null);
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className='navbar__container'>
        <div className='navbar__left'>
          <Link to='/' className='navbar__link'>
            <img
              src='https://ps.w.org/spotlight-social-photo-feeds/assets/icon-256x256.png?rev=2510613'
              alt=''
            />
          </Link>
          <Link to='/' className='navbar__link'>
            <span>Homepage</span>
          </Link>
          <Link to='/series' className='navbar__link'>
            <span>Series</span>
          </Link>
          <Link to='/movies' className='navbar__link'>
            <span>Movies</span>
          </Link>
        </div>
        <div className='navbar__right'>
          <AccountCircle />
          {/* replace account circle <image src='profile picture' alt='' /> */}
          <div className='navbar__profile'>
            <ArrowDropDown className='navbar__icon' />
            <div className='navbar__options' id='options'>
              <Link to='/admin/login'>
                <span>Admin</span>
              </Link>
              <Link to='/login'>
                <span onClick={() => dispatch(logout())}>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
