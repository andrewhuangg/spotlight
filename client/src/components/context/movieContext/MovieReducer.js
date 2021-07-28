import {
  MOVIE_START,
  MOVIE_SUCCESS,
  MOVIE_FAILURE,
  DELETE_MOVIE_FAILURE,
  DELETE_MOVIE_START,
  DELETE_MOVIE_SUCCESS,
} from './MovieActions';

export const movieReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIE_START:
      return {
        movies: [],
        isFetching: true,
        error: false,
      };

    case MOVIE_SUCCESS:
      return {
        movies: payload,
        isFetching: false,
        error: false,
      };

    case MOVIE_FAILURE:
      return {
        movies: [],
        isFetching: false,
        error: true,
      };

    case DELETE_MOVIE_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case DELETE_MOVIE_SUCCESS:
      return {
        movies: state.movies.filter((movie) => movie._id !== action.payload),
        isFetching: false,
        error: false,
      };

    case DELETE_MOVIE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default movieReducer;
