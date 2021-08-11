import React, { useRef, useState } from 'react';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from '../listItem/ListItem';

const List = ({ list, mountedRef }) => {
  const [isLeftSlide, setIsLeftSlide] = useState(false);
  const [isRightSlide, setIsRightSlide] = useState(true);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  // our item width size is around 230 ~~ check scss
  const [listPosition, setListPosition] = useState(0);
  // once we add api, change list position to list lengths

  const listRef = useRef();

  const handleSlider = (direction) => {
    const listLength = list.length;

    if (listPosition > 0) {
      setIsLeftSlide(true);
    } else if (listPosition === 0) {
      setIsLeftSlide(false);
    }

    if (listPosition >= listLength) {
      setIsRightSlide(false);
    } else if (listPosition < listLength) {
      setIsRightSlide(true);
    }

    let dist = listRef.current.getBoundingClientRect().x - 50;

    if (direction === 'left' && listPosition > 0) {
      setListPosition(listPosition - 1);
      listRef.current.style.transform = `translateX(${230 + dist}px)`;
    } else if (direction === 'right' && listPosition < 10 - clickLimit) {
      setListPosition(listPosition + 1);
      listRef.current.style.transform = `translateX(${-230 + dist}px)`;
    }
  };

  return (
    <div className='list' ref={mountedRef}>
      <span className='list__title'>{list.title}</span>

      <div className='list__wrapper'>
        <div className='list__container' ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem key={i} index={i} item={item} />
          ))}
        </div>
      </div>
      <ArrowBackIosOutlined
        className='list__sliderArrow left'
        onClick={() => handleSlider('left')}
        style={{ display: !isLeftSlide && 'none' }}
      />
      <ArrowForwardIosOutlined
        className='list__sliderArrow right'
        onClick={() => handleSlider('right')}
        style={{ display: !isRightSlide && 'none' }}
      />
    </div>
  );
};

export default List;
