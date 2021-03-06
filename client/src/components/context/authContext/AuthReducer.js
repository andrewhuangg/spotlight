import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './AuthActions';

const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_START:
      return {
        user: null,
        isFetching: true,
        error: false,
      };

    case LOGIN_SUCCESS:
      return {
        user: payload,
        isFetching: false,
        error: false,
      };

    case LOGIN_FAILURE:
      return {
        user: null,
        isFetching: false,
        error: true,
      };

    case LOGOUT:
      return {
        user: null,
        isFetching: false,
        error: false,
      };

    default:
      return { ...state };
  }
};

export default authReducer;
