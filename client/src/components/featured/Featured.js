import React, { useEffect, useState } from 'react';
import { PlayArrow } from '@material-ui/icons';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        const { data } = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).signedToken,
          },
        });

        setContent(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRandomMovie();
  }, [type]);

  return (
    <div className='featured'>
      {type && (
        <div className='featured__category'>
          <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
          <select name='genre' id='genre' onChange={(e) => setGenre(e.target.value)}>
            <option>Genre</option>
            <option value='animals'>Animals</option>
            <option value='arts and culture'>Arts and Culture</option>
            <option value='athletics'>Athletics</option>
            <option value='current events'>Current Events</option>
            <option value='film'>Film</option>
            <option value='nature'>Nature</option>
            <option value='technology'>Technology</option>
          </select>
        </div>
      )}

      <img src={content.imageHero} alt='' />

      <div className='featured__info'>
        <img src={content.imageTitle} alt='' />

        <span className='featured__description'>{content.description}</span>

        <div className='featured__cta'>
          <Link to={{ pathname: '/watch', movie: content }}>
            <button className='featured__play-btn'>
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
