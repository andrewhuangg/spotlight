import { createContext, useReducer } from 'react';
import movieReducer from './MovieReducer';

const initialState = {
  movies: [],
  isFetching: false,
  error: false,
};

export const MovieContext = createContext(initialState);

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
