import React from 'react';
import Chart from './Chart';
import FeaturedInfo from './FeaturedInfo';
import { userData } from '../../dummyData';
import WidgetSm from './WidgetSm';
import WidgetLg from './WidgetLg';

const Main = () => {
  return (
    <div className='main'>
      <FeaturedInfo />
      <Chart data={userData} title={'User Analytics'} grid dataKey='Active User' />
      <div className='main__widgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Main;
