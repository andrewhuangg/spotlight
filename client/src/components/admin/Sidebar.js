import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from '@material-ui/icons';
import React from 'react';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__wrapper'>
        <div className='sidebar__menu'>
          <h3 className='sidebar__title'>Dashboard</h3>
          <ul className='sidebar__list'>
            <li className='sidebar__list-item'>
              <LineStyle className='sidebar__icon' />
              Home
            </li>
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
            <li className='sidebar__list-item'>
              <PermIdentity className='sidebar__icon' />
              Home
            </li>
            <li className='sidebar__list-item'>
              <Storefront className='sidebar__icon' />
              Analytics
            </li>
            <li className='sidebar__list-item'>
              <AttachMoney className='sidebar__icon' />
              Sales
            </li>
            <li className='sidebar__list-item'>
              <BarChart className='sidebar__icon' />
              Sales
            </li>
          </ul>
        </div>

        <div className='sidebar__menu'>
          <h3 className='sidebar__title'>Notifications</h3>
          <ul className='sidebar__list'>
            <li className='sidebar__list-item'>
              <MailOutline className='sidebar__icon' />
              Home
            </li>
            <li className='sidebar__list-item'>
              <DynamicFeed className='sidebar__icon' />
              Analytics
            </li>
            <li className='sidebar__list-item'>
              <ChatBubbleOutline className='sidebar__icon' />
              Sales
            </li>
          </ul>
        </div>

        <div className='sidebar__menu'>
          <h3 className='sidebar__title'>Staff</h3>
          <ul className='sidebar__list'>
            <li className='sidebar__list-item'>
              <WorkOutline className='sidebar__icon' />
              Home
            </li>
            <li className='sidebar__list-item'>
              <Timeline className='sidebar__icon' />
              Analytics
            </li>
            <li className='sidebar__list-item'>
              <Report className='sidebar__icon' />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
