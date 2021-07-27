import React from 'react';
import { Link } from 'react-router-dom';
import Chart from './Chart';
import { movieData } from '../../dummyData';
import { Publish } from '@material-ui/icons';

const Movie = () => {
  return (
    <div className='movie'>
      <div className='movie__header'>
        <h1 className='movie__title'>Movies</h1>
        <Link to='/admin/add-new-movie'>
          <button className='movie__add-btn'>Create</button>
        </Link>
      </div>
      <div className='movie__top'>
        <div className='movie__left'>
          <Chart data={movieData} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className='movie__right'>
          <div className='movie__info-top'>
            <img
              className='movie__info-image'
              src='https://images.unsplash.com/photo-1549820610-ec7475b33969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              alt=''
            />
            <span className='movie__name'>Movie</span>
          </div>
          <div className='movie__info-bottom'>
            <div className='movie__item'>
              <span className='movie__key'>id:</span>
              <span className='movie__value'>123</span>
            </div>
            <div className='movie__item'>
              <span className='movie__key'>sales:</span>
              <span className='movie__value'>123</span>
            </div>
            <div className='movie__item'>
              <span className='movie__key'>active:</span>
              <span className='movie__value'>yes</span>
            </div>
            <div className='movie__item'>
              <span className='movie__key'>in stock:</span>
              <span className='movie__value'>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className='movie__bottom'>
        <form className='movie__form'>
          <div className='movie__form-left'>
            <label>Movie Name</label>
            <input type='text' placeholder='movie' />
            <label>In Stock</label>
            <select name='inStock' id='idStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label>Active</label>
            <select name='active' id='idActive'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='movie__form-right'>
            <div className='movie__upload'>
              <img
                className='movie__upload-image'
                src='https://images.unsplash.com/photo-1549820610-ec7475b33969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                alt=''
              />
              <label for='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className='movie__update-btn'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Movie;
