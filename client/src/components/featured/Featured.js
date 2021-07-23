import React, { useEffect, useState } from 'react';
import { PlayArrow, InfoOutlined } from '@material-ui/icons';
import axios from 'axios';

const Featured = ({ type }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomMovie = async () => {
      try {
        const { data } = await axios.get(`movies/random?type=${type}`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjYwODJkN2VmY2M4MGRiMjJiNzM4MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNjk5NTg5OSwiZXhwIjoxNjI3MDgyMjk5fQ.o5f1mTGU2PK7o-UqWanhPRTreVOzVwsfU48EjFQlSrI',
          },
        });
        setContent(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomMovie();
  }, []);

  return (
    <div className='featured'>
      {type && (
        <div className='featured__category'>
          <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
          <select name='genre' id='genre'>
            <option>Genre</option>
            <option value='adventure'>Adventure</option>
            <option value='comedy'>Comedy</option>
            <option value='crime'>Crime</option>
            <option value='fantasy'>Fantasy</option>
            <option value='historical'>Historical</option>
            <option value='horror'>Horror</option>
            <option value='romance'>Romance</option>
            <option value='sci-fi'>Sci-fi</option>
            <option value='thriller'>Thriller</option>
            <option value='western'>Western</option>
            <option value='animation'>Animation</option>
            <option value='drama'>Drama</option>
            <option value='documentary'>Documentary</option>
          </select>
        </div>
      )}

      <img src={content.imageHero} alt='' />

      <div className='featured__info'>
        <img src={content.imageTitle} alt='' />

        <span className='featured__description'>{content.description}</span>

        <div className='featured__cta'>
          <button className='featured__play-btn'>
            <PlayArrow />
            <span>Play</span>
          </button>

          <button className='featured__more-btn'>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
