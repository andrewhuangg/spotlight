import {
  GET_LISTS_START,
  GET_LISTS_SUCCESS,
  GET_LISTS_FAILURE,
  DELETE_LIST_START,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_FAILURE,
} from './ListActions';

const listReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_LISTS_START:
      return {
        lists: [],
        isFetching: true,
        error: false,
      };

    case GET_LISTS_SUCCESS:
      return {
        lists: payload,
        isFetching: false,
        error: false,
      };

    case GET_LISTS_FAILURE:
      return {
        lists: [],
        isFetching: false,
        error: true,
      };

    case DELETE_LIST_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case DELETE_LIST_SUCCESS:
      return {
        lists: state.lists.filter((list) => list._id !== payload),
        isFetching: false,
        error: false,
      };

    case DELETE_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default listReducer;
