import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Watch = () => {
  const location = useLocation();
  const movie = location.movie;
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className='watch'>
      <div className='watch__back-btn' onClick={() => goBack()}>
        <ArrowBackOutlined />
        Home
      </div>
      <video className='watch__video' autoPlay progress='true' controls src={movie.video} />
    </div>
  );
};

export default Watch;
