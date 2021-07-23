import React, { useEffect, useState, useRef, useCallback } from 'react';
import { PlayArrow, InfoOutlined } from '@material-ui/icons';
import axios from 'axios';

const Featured = ({ type }) => {
  const [content, setContent] = useState({});
  const mountedRef = useRef(true);

  const fetchRandomMovie = useCallback(
    async (type) => {
      try {
        const { data } = await axios.get(`movies/random?type=${type}`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjYwODJkN2VmY2M4MGRiMjJiNzM4MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNjk5ODUyOSwiZXhwIjoxNjI3MDg0OTI5fQ.m4kjuUf8EF__EH05dIysh8Kb--6-Rqr6vAj7xDnBfws',
          },
        });
        if (!mountedRef.current) return null;
        if (mountedRef.current) setContent(data[0]);
      } catch (error) {
        console.log(error);
      }
    },
    [mountedRef]
  );

  useEffect(() => {
    fetchRandomMovie(type);
    return () => {
      mountedRef.current = false;
    };
  }, [type, fetchRandomMovie]);

  return (
    <div className='featured' ref={mountedRef}>
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
