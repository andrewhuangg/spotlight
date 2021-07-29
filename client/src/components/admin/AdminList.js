import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Publish } from '@material-ui/icons';

const AdminList = () => {
  const location = useLocation();
  const list = location.list;

  return (
    <div className='movie'>
      <div className='movie__header'>
        <h1 className='movie__title'>List</h1>
        <Link to='/admin/add-new-list'>
          <button className='movie__add-btn'>Create</button>
        </Link>
      </div>
      <div className='movie__top'>
        <div className='movie__right'>
          <div className='movie__info-top'>
            <span className='movie__name'>{list.title}</span>
          </div>
          <div className='movie__info-bottom'>
            <div className='movie__item'>
              <span className='movie__key'>id:</span>
              <span className='movie__value'>{list._id}</span>
            </div>
            <div className='movie__item'>
              <span className='movie__key'>genre:</span>
              <span className='movie__value'>{list.genre}</span>
            </div>
            <div className='movie__item'>
              <span className='movie__key'>type:</span>
              <span className='movie__value'>{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='movie__bottom'>
        <form className='movie__form'>
          <div className='movie__form-left'>
            <label>List Title</label>
            <input type='text' placeholder={list.title} />
            <label>Year</label>
            <input type='text' palceholder={list.type} />
            <label>Genre</label>
            <input type='text' palceholder={list.genre} />
          </div>
          <div className='movie__form-right'>
            <button className='movie__update-btn'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminList;
