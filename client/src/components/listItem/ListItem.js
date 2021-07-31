import React, { useEffect, useState } from 'react';
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  // get size of item pre and post hover, center and divide it..., and subtract remaining width from pre hover
  // account for list position as well
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get('/movies/' + item, {
          headers: {
            token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).signedToken,
          },
        });
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [item]);

  return (
    <Link to={{ pathname: '/watch', movie: movie }}>
      <div
        className='listitem'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ left: isHovered && index * 225 + index * 2.5 }}
      >
        <img src={movie.imagePin} alt='' />

        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay loop />

            <div className='listitem__info'>
              <div className='listitem__icons'>
                <PlayArrow className='listitem__icon' />
                <Add className='listitem__icon' />
                <ThumbUpAltOutlined className='listitem__icon' />
                <ThumbDownAltOutlined className='listitem__icon' />
              </div>

              <div className='listitem__top'>
                <span>{movie.duration}</span>
                <span className='listitem__age-limit'>{movie.limit}</span>
                <span>{movie.year}</span>
              </div>

              <div className='listitem__description'>{movie.description}</div>

              <div className='listitem__genre'>{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
