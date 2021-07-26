import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Main from './Main';
import UserList from './UserList';
import User from './User';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NewUser from './NewUser';
import ProductList from './ProductList';
import Product from './Product';
import NewProduct from './NewProduct';

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
          <Route path={`${path}/create-new-user`}>
            <NewUser />
          </Route>
          <Route path={`${path}/products`}>
            <ProductList />
          </Route>
          <Route path={`${path}/product/:productId`}>
            <Product />
          </Route>
          <Route path={`${path}/add-new-product`}>
            <NewProduct />
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
