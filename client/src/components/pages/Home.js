import React, { useEffect, useState, useRef, useCallback } from 'react';
import Navbar from '../layout/Navbar';
import Featured from '../featured/Featured';
import List from '../list/List';
import axios from 'axios';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const mountedRef = useRef(true);

  const fetchLists = useCallback(
    async (type, genre) => {
      try {
        const { data } = await axios.get(
          `/lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`,
          {
            headers: {
              token:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjYwODJkN2VmY2M4MGRiMjJiNzM4MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNjk5ODUyOSwiZXhwIjoxNjI3MDg0OTI5fQ.m4kjuUf8EF__EH05dIysh8Kb--6-Rqr6vAj7xDnBfws',
            },
          }
        );
        if (!mountedRef.current) return null;
        if (mountedRef.current) setLists(data);
      } catch (error) {
        console.log(error);
      }
    },
    [mountedRef]
  );

  useEffect(() => {
    fetchLists(type, genre);
    return () => {
      mountedRef.current = false;
    };
  }, [type, genre, fetchLists]);

  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} />
      {lists.map((list, i) => (
        <List list={list} key={i} mountedRef={mountedRef} />
      ))}
    </div>
  );
};

export default Home;
