import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './components/context/authContext/AuthContext';
import { MovieContextProvider } from './components/context/movieContext/MovieContext';
ReactDOM.render(
  <AuthContextProvider>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);
