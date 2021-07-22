import './assets/style.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Watch from './components/pages/Watch';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

const App = () => (
  <>
    <Home />
  </>
);

export default App;
