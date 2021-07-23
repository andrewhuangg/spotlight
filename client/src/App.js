import './assets/style.scss';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './components/pages/Home';
import Watch from './components/pages/Watch';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

const App = () => {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {user ? <Home /> : <Redirect to='/register' />}
        </Route>

        <Route exact path='/register'>
          {!user ? <Register /> : <Redirect to='/' />}
        </Route>

        <Route exact path='/login'>
          {!user ? <Login /> : <Redirect to='/' />}
        </Route>

        {user && (
          <>
            <Route exact path='/movies' render={(props) => <Home {...props} type={'movies'} />} />
            <Route exact path='/series' render={(props) => <Home {...props} type={'series'} />} />
            <Route exact path='/watch' component={Watch} />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
