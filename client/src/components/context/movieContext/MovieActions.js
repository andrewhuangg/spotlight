export const MOVIE_START = 'MOVIE_START';
export const MOVIE_SUCCESS = 'MOVIE_SUCCESS';
export const MOVIE_FAILURE = 'MOVIE_FAILURE';
export const CREATE_MOVIE_START = 'CREATE_MOVIE_START';
export const CREATE_MOVIE_SUCCESS = 'CREATE_MOVIE_SUCCESS';
export const CREATE_MOVIE_FAILURE = 'CREATE_MOVIE_FAILURE';
export const DELETE_MOVIE_START = 'DELETE_MOVIE_START';
export const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';
export const DELETE_MOVIE_FAILURE = 'DELETE_MOVIE_FAILURE';

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

export const createMoviesStart = () => ({
  type: CREATE_MOVIE_START,
});

export const createMoviesSuccess = (movie) => ({
  type: CREATE_MOVIE_SUCCESS,
  payload: movie,
});

export const createMoviesFailure = () => ({
  type: CREATE_MOVIE_FAILURE,
});

export const deleteMovieStart = () => ({
  type: DELETE_MOVIE_START,
});

export const deleteMovieSuccess = (id) => ({
  type: DELETE_MOVIE_SUCCESS,
  payload: id,
});

export const deleteMovieFailure = () => ({
  type: DELETE_MOVIE_FAILURE,
});
