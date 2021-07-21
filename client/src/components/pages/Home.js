import React from 'react';
import Navbar from '../layout/Navbar';
import Featured from '../featured/Featured';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
    </div>
  );
};

export default Home;
