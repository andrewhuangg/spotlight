import React, { useRef, useState } from 'react';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from '../listItem/ListItem';

const List = ({ list }) => {
  const [isLeftSlide, setIsLeftSlide] = useState(false);
  const [isRightSlide, setIsRightSlide] = useState(true);
  const [listPosition, setListPosition] = useState(0);
  // once we add api, change list position to list lengths

  const listRef = useRef();

  const handleSlider = (direction) => {
    if (listPosition > 0) {
      setIsLeftSlide(true);
    } else if (listPosition === 0) {
      setIsLeftSlide(false);
    }

    if (listPosition >= 5) {
      setIsRightSlide(false);
    } else if (listPosition < 5) {
      setIsRightSlide(true);
    }

    // The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
    let dist = listRef.current.getBoundingClientRect().x - 50;

    if (direction === 'left' && listPosition > 0) {
      setListPosition(listPosition - 1);
      listRef.current.style.transform = `translateX(${230 + dist}px)`;
    } else if (direction === 'right' && listPosition < 5) {
      setListPosition(listPosition + 1);
      listRef.current.style.transform = `translateX(${-230 + dist}px)`;
    }
  };

  return (
    <div className='list'>
      <span className='list__title'>{list.title}</span>

      <div className='list__wrapper'>
        <ArrowBackIosOutlined
          className='list__sliderArrow left'
          onClick={() => handleSlider('left')}
          style={{ display: !isLeftSlide && 'none' }}
        />

        <div className='list__container' ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem key={i} index={i} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className='list__sliderArrow right'
          onClick={() => handleSlider('right')}
          style={{ display: !isRightSlide && 'none' }}
        />
      </div>
    </div>
  );
};

export default List;
