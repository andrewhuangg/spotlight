import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './components/context/authContext/AuthContext';
import { MovieContextProvider } from './components/context/movieContext/MovieContext';
import { ListContextProvider } from './components/context/listContext/ListContext';
ReactDOM.render(
  <AuthContextProvider>
    <MovieContextProvider>
      <ListContextProvider>
        <App />
      </ListContextProvider>
    </MovieContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);
