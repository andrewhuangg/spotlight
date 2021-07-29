import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Chart from './Chart';
import { movieData } from '../../dummyData';
import { Publish } from '@material-ui/icons';

const Movie = () => {
  const location = useLocation();
  const movie = location.movie;

  return (
    <div className='movie'>
      <div className='movie__header'>
        <h1 className='movie__title'>Movies</h1>
        <Link to='/admin/add-new-movie'>
          <button className='movie__add-btn'>Create</button>
        </Link>
      </div>
      <div className='movie__top'>
        <div className='movie__right'>
          <div className='movie__info-top'>
            <img className='movie__info-image' src={movie.imageHero} alt='' />
            <span className='movie__name'>{movie.title}</span>
          </div>
          <div className='movie__info-bottom'>
            <div className='movie__item'>
              <span className='movie__key'>id:</span>
              <span className='movie__value'>{movie._id}</span>
            </div>
            <div className='movie__item'>
              <span className='movie__key'>genre:</span>
              <span className='movie__value'>{movie.genre}</span>
            </div>
            <div className='movie__item'>
              <span className='movie__key'>year:</span>
              <span className='movie__value'>{movie.year}</span>
            </div>
            <div className='movie__item'>
              <span className='movie__key'>limit:</span>
              <span className='movie__value'>{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='movie__bottom'>
        <form className='movie__form'>
          <div className='movie__form-left'>
            <label>Movie Title</label>
            <input type='text' placeholder={movie.title} />
            <label>Year</label>
            <input type='text' palceholder={movie.year} />
            <label>Genre</label>
            <input type='text' palceholder={movie.genre} />
            <label>Limit</label>
            <input type='text' palceholder={movie.limit} />
            <label>Trailer</label>
            <input type='file' palceholder={movie.trailer} />
            <label>Video</label>
            <input type='file' palceholder={movie.video} />
          </div>
          <div className='movie__form-right'>
            <div className='movie__upload'>
              <img className='movie__upload-image' src={movie.imageHero} alt='' />
              <label htmlFor='file'>
                <Publish className='movie__upload-btn' />
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
