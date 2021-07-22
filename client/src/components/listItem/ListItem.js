import React, { useState } from 'react';
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  // get size of item pre and post hover, center and divide it..., and subtract remaining width from pre hover
  // account for list position as well

  const trailer =
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';

  return (
    <div
      className='listitem'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 225 + index * 2.5 }}
    >
      <img
        src='https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee'
        alt=''
      />

      {isHovered && (
        <>
          <video src={trailer} autoPlay loop />

          <div className='listitem__info'>
            <div className='listitem__icons'>
              <PlayArrow className='listitem__icon' />
              <Add className='listitem__icon' />
              <ThumbUpAltOutlined className='listitem__icon' />
              <ThumbDownAltOutlined className='listitem__icon' />
            </div>

            <div className='listitem__top'>
              <span>1 hour 14 mins</span>
              <span className='listitem__age-limit'>+16</span>
              <span>1999</span>
            </div>

            <div className='listitem__description'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>

            <div className='listitem__genre'>action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
