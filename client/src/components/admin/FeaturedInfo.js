import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';

const FeaturedInfo = () => {
  return (
    <div className='featuredinfo'>
      <div className='featuredinfo__item'>
        <span className='featuredinfo__title'>Revenue</span>
        <div className='featuredinfo__money-container'>
          <span className='featuredinfo__money'>$2,415</span>
          <span className='featuredinfo__rate'>
            -11.4 <ArrowDownward className='featuredinfo__icon  negative' />
          </span>
        </div>
        <span className='featuredinfo__sub'>Compared to last month</span>
      </div>

      <div className='featuredinfo__item'>
        <span className='featuredinfo__title'>Sales</span>
        <div className='featuredinfo__money-container'>
          <span className='featuredinfo__money'>$4,415</span>
          <span className='featuredinfo__rate'>
            -1.4 <ArrowDownward className='featuredinfo__icon  negative' />
          </span>
        </div>
        <span className='featuredinfo__sub'>Compared to last month</span>
      </div>

      <div className='featuredinfo__item'>
        <span className='featuredinfo__title'>Cost</span>
        <div className='featuredinfo__money-container'>
          <span className='featuredinfo__money'>$2,815</span>
          <span className='featuredinfo__rate'>
            3.4 <ArrowUpward className='featuredinfo__icon  positive' />
          </span>
        </div>
        <span className='featuredinfo__sub'>Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
