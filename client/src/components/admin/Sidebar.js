import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  PlayCircleOutline,
  Report,
  Timeline,
  TrendingUp,
  WorkOutline,
} from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__wrapper'>
        <div className='sidebar__menu'>
          <h3 className='sidebar__title'>Dashboard</h3>
          <ul className='sidebar__list'>
            <Link to='/admin' className='sidebar__icon-link'>
              <li className='sidebar__list-item'>
                <LineStyle className='sidebar__icon' />
                Home
              </li>
            </Link>
            <li className='sidebar__list-item'>
              <Timeline className='sidebar__icon' />
              Analytics
            </li>
            <li className='sidebar__list-item'>
              <TrendingUp className='sidebar__icon' />
              Sales
            </li>
          </ul>
        </div>

        <div className='sidebar__menu'>
          <h3 className='sidebar__title'>Quick Menu</h3>
          <ul className='sidebar__list'>
            <Link to='/admin/users' className='sidebar__icon-link'>
              <li className='sidebar__list-item'>
                <PermIdentity className='sidebar__icon' />
                Users
              </li>
            </Link>
            <Link to='/admin/movies' className='sidebar__icon-link'>
              <li className='sidebar__list-item'>
                <PlayCircleOutline className='sidebar__icon' />
                Movies
              </li>
            </Link>
            <li className='sidebar__list-item'>
              <AttachMoney className='sidebar__icon' />
              Transactions
            </li>
            <li className='sidebar__list-item'>
              <BarChart className='sidebar__icon' />
              Reports
            </li>
          </ul>
        </div>

        <div className='sidebar__menu'>
          <h3 className='sidebar__title'>Notifications</h3>
          <ul className='sidebar__list'>
            <li className='sidebar__list-item'>
              <MailOutline className='sidebar__icon' />
              Mail
            </li>
            <li className='sidebar__list-item'>
              <DynamicFeed className='sidebar__icon' />
              Feedback
            </li>
            <li className='sidebar__list-item'>
              <ChatBubbleOutline className='sidebar__icon' />
              Messages
            </li>
          </ul>
        </div>

        <div className='sidebar__menu'>
          <h3 className='sidebar__title'>Staff</h3>
          <ul className='sidebar__list'>
            <li className='sidebar__list-item'>
              <WorkOutline className='sidebar__icon' />
              Manage
            </li>
            <li className='sidebar__list-item'>
              <Timeline className='sidebar__icon' />
              Analytics
            </li>
            <li className='sidebar__list-item'>
              <Report className='sidebar__icon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
