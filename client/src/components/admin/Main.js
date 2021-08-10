import React, { useEffect, useMemo, useState } from 'react';
import Chart from './Chart';
import FeaturedInfo from './FeaturedInfo';
import { userData } from '../../dummyData';
import WidgetSm from './WidgetSm';
import WidgetLg from './WidgetLg';
import axios from 'axios';

const Main = () => {
  const MONTHS = useMemo(
    () => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const { data } = await axios.get('/users/stats', {
          headers: {
            token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).signedToken,
          },
        });

        const statList = data.sort((a, b) => a._id - b._id);

        statList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            {
              name: MONTHS[item._id - 1],
              'New User': item.total,
            },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className='main'>
      <FeaturedInfo />
      <Chart data={userStats} title={'User Analytics'} grid dataKey='New User' />
      <div className='main__widgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Main;
