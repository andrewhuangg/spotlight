import React from 'react';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from '../listItem/ListItem';

const List = () => {
  return (
    <div className='list'>
      <span className='list__title'>Continue to watch</span>
      <div className='list__wrapper'>
        <ArrowBackIosOutlined />
        <div className='list__container'>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined />
      </div>
    </div>
  );
};

export default List;
