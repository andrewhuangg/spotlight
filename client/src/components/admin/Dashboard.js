import React, { useContext } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/authContext/AuthContext';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Main from './Main';
import UserList from './UserList';
import User from './User';
import NewUser from './NewUser';
import MovieList from './MovieList';
import Movie from './Movie';
import NewMovie from './NewMovie';
import AdminLogin from './AdminLogin';
import AdminLists from './AdminLists';
import AdminList from './AdminList';
import AdminNewList from './AdminNewList';

const Dashboard = () => {
  let { path } = useRouteMatch();
  const { user } = useContext(AuthContext);

  return (
    <div className='dashboard'>
      <Switch>
        <Route path={`${path}/login`}>{user ? <Redirect to='/admin' /> : <AdminLogin />}</Route>
        {/* redirect to home page if there is a user */}
        {user && (
          <>
            <Topbar />
            <div className='dashboard__container'>
              <Sidebar />

              <Route path={`${path}/users`}>
                <UserList />
              </Route>
              <Route path={`${path}/user/:userId`}>
                <User />
              </Route>
              <Route path={`${path}/create-new-user`}>
                <NewUser />
              </Route>
              <Route path={`${path}/movies`}>
                <MovieList />
              </Route>
              <Route path={`${path}/movie/:movieId`}>
                <Movie />
              </Route>
              <Route path={`${path}/add-new-movie`}>
                <NewMovie />
              </Route>
              <Route path={`${path}/lists`}>
                <AdminLists />
              </Route>
              <Route path={`${path}/list/:listId`}>
                <AdminList />
              </Route>
              <Route path={`${path}/add-new-list`}>
                <AdminNewList />
              </Route>
              <Route exact path={path}>
                <Main />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </div>
  );
};

export default Dashboard;
