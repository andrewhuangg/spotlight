import './assets/style.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/pages/Home';
import Watch from './components/pages/Watch';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Dashboard from './components/admin/Dashboard';

const App = () => {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route path='/admin' component={Dashboard} />
        {/* <Route exact path='/'>
          {user ? <Home /> : <Redirect to='/register' />}
        </Route>

        <Route path='/register'>{!user ? <Register /> : <Redirect to='/' />}</Route>

        <Route path='/login'>{!user ? <Login /> : <Redirect to='/' />}</Route>

        {user && (
          <>
            <Route path='/movies' render={(props) => <Home {...props} type={'movies'} />} />
            <Route path='/series' render={(props) => <Home {...props} type={'series'} />} />
            <Route path='/watch' component={Watch} />
          </>
        )} */}
      </Switch>
    </Router>
  );
};

export default App;
