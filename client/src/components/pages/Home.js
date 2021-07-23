import React, { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import Featured from '../featured/Featured';
import List from '../list/List';
import axios from 'axios';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const { data } = await axios.get(
          `lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`,
          {
            headers: {
              token:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjYwODJkN2VmY2M4MGRiMjJiNzM4MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNjk5MzM5MCwiZXhwIjoxNjI3MDc5NzkwfQ.wksvohaoJ-0T_CNhOUfUza0EiMtRiYifFq3L-oNzWjY',
            },
          }
        );
        setLists(data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} />
      {lists.map((list, i) => (
        <List list={list} key={i} />
      ))}
    </div>
  );
};

export default Home;
