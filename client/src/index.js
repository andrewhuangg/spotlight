import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './components/context/authContext/AuthContext';
import { MovieContextProvider } from './components/context/movieContext/MovieContext';
import { ListContextProvider } from './components/context/listContext/ListContext';
import { UserContextProvider } from './components/context/userContext/UserContext';
ReactDOM.render(
  <AuthContextProvider>
    <UserContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <App />
        </ListContextProvider>
      </MovieContextProvider>
    </UserContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);
