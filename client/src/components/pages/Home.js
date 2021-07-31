import React, { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import Featured from '../featured/Featured';
import List from '../list/List';
import axios from 'axios';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const { data } = await axios.get(
          `/lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`,
          {
            headers: {
              token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).signedToken,
            },
          }
        );
        setLists(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLists();
  }, [type, genre]);

  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list, i) => (
        <List list={list} key={i} />
      ))}
    </div>
  );
};

export default Home;
