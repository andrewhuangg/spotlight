import { createContext, useReducer } from 'react';

import userReducer from './UserReducer';

const initialState = {
  users: [],
  isFetching: false,
  error: false,
};

export const UserContext = createContext(initialState);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
