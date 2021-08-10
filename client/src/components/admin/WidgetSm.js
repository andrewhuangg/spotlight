import { Visibility } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const { data } = await axios.get('/users?new=true', {
          headers: {
            token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).signedToken,
          },
        });
        setNewUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    getNewUsers();
  }, []);

  return (
    <div className='widgetsm'>
      <span className='widgetsm__title'>New Join Members</span>
      <ul className='widgetsm__list'>
        {newUsers.map((user, i) => (
          <li className='widgetsm__list-item' key={i}>
            <img
              className='widgetsm__image'
              src={
                user.profileImage ||
                'https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg'
              }
              alt=''
            />
            <div className='widgetsm__user-container'>
              <span className='widgetsm__username'>{user.username}</span>
            </div>
            <button className='widgetsm__btn'>
              <Visibility className='widgetsm__icon' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
