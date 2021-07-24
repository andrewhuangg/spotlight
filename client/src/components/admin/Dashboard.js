import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Main from './Main';
import UserList from './UserList';
import User from './User';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Dashboard = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className='dashboard'>
      <Topbar />
      <div className='dashboard__container'>
        <Sidebar />

        <Switch>
          <Route path={`${path}/users`}>
            <UserList />
          </Route>
          <Route path={`${path}/user/:userId`}>
            <User />
          </Route>
          <Route exact path={path}>
            <Main />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
