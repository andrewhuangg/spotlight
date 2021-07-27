import { MOVIE_START, MOVIE_SUCCESS, MOVIE_FAILURE } from './MovieActions';

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

    default:
      return { ...state };
  }
};

export default movieReducer;
