export const MOVIE_START = 'MOVIE_START';
export const MOVIE_SUCCESS = 'MOVIE_SUCCESS';
export const MOVIE_FAILURE = 'MOVIE_FAILURE';

export const getMoviesStart = () => ({
  type: MOVIE_START,
});

export const getMoviesSuccess = (movies) => ({
  type: MOVIE_SUCCESS,
  payload: movies,
});

export const getMoviesFailure = () => ({
  type: MOVIE_FAILURE,
});
