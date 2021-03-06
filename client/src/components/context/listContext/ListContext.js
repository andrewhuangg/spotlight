import { createContext, useReducer } from 'react';
import listReducer from './ListReducer';

const initialState = {
  lists: [],
  isFetching: false,
  error: false,
};

export const ListContext = createContext(initialState);

export const ListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(listReducer, initialState);

  return (
    <ListContext.Provider
      value={{
        lists: state.lists,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
