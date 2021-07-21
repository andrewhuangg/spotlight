import React from 'react';
import Navbar from '../layout/Navbar';
import Featured from '../featured/Featured';
import List from '../list/List';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
