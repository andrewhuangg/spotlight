import './assets/style.scss';
import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/pages/Home';
import Watch from './components/pages/Watch';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Dashboard from './components/admin/Dashboard';
import { AuthContext } from './components/context/authContext/AuthContext';

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route path='/admin' component={Dashboard} />
        <Route exact path='/'>
          {user ? <Home /> : <Redirect to='/register' />}
        </Route>
        <Route path='/register'>{!user ? <Register /> : <Redirect to='/' />}</Route>
        <Route path='/login'>{!user ? <Login /> : <Redirect to='/' />}</Route>
        {user && (
          <>
            <Route path='/movies'>
              <Home type='movie' />
            </Route>
            <Route path='/series'>
              <Home type='series' />
            </Route>
            <Route path='/watch'>
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
