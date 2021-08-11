import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from './UserActions';

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS_START:
      return {
        users: [],
        isFetching: true,
        error: false,
      };
    case GET_USERS_SUCCESS:
      return {
        users: payload,
        isFetching: false,
        error: false,
      };
    case GET_USERS_FAILURE:
      return {
        users: [],
        isFetching: false,
        error: true,
      };
    case CREATE_USER_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case CREATE_USER_SUCCESS:
      return {
        users: [...state.users, payload],
        isFetching: false,
        error: true,
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case UPDATE_USER_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case UPDATE_USER_SUCCESS:
      return {
        users: state.users.map((user) => user._id === payload._id && payload),
        isFetching: false,
        error: false,
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case DELETE_USER_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case DELETE_USER_SUCCESS:
      return {
        users: state.users.filter((user) => user._id !== payload),
        isFetching: false,
        error: false,
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default userReducer;
