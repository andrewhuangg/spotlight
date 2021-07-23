import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Watch = () => {
  const location = useLocation();
  const movie = location.movie;

  return (
    <div className='watch'>
      <div className='watch__back-btn'>
        <ArrowBackOutlined />
        Home
      </div>
      <video className='watch__video' autoPlay progress='true' controls src={movie.video} />
    </div>
  );
};

export default Watch;
