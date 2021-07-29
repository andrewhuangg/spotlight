import {
  MOVIE_START,
  MOVIE_SUCCESS,
  MOVIE_FAILURE,
  CREATE_MOVIE_START,
  CREATE_MOVIE_SUCCESS,
  CREATE_MOVIE_FAILURE,
  UPDATE_MOVIE_START,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_FAILURE,
  DELETE_MOVIE_START,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILURE,
} from './MovieActions';

const movieReducer = (state, action) => {
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

    case CREATE_MOVIE_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case CREATE_MOVIE_SUCCESS:
      return {
        movies: [...state.movies, payload],
        isFetching: false,
        error: false,
      };

    case CREATE_MOVIE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case UPDATE_MOVIE_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case UPDATE_MOVIE_SUCCESS:
      return {
        movies: state.movies.map((movie) => movie._id === payload._id && payload),
        isFetching: false,
        error: false,
      };

    case UPDATE_MOVIE_FAILURE:
      return {
        ...state,
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
