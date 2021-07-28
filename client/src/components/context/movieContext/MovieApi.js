import axios from 'axios';
import {
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
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
