import axios from 'axios';
import {
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
  createMoviesStart,
  createMoviesSuccess,
  createMoviesFailure,
} from './MovieActions';

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());

  try {
    const { data } = await axios.get('/movies', {
      headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).signedToken },
    });

    dispatch(getMoviesSuccess(data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};

export const createMovie = async (movie, dispatch) => {
  dispatch(createMoviesStart());
  try {
    const { data } = await axios.post(`/movies`, movie, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).signedToken,
      },
    });
    dispatch(createMoviesSuccess(data));
  } catch (error) {
    dispatch(createMoviesFailure());
  }
};

export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());

  try {
    await axios.delete(`/movies/${id}`, {
      headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).signedToken },
    });

    dispatch(deleteMovieSuccess(id));
  } catch (error) {
    dispatch(deleteMovieFailure());
  }
};
