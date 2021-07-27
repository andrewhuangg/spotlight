import axios from 'axios';
import { getMoviesFailure, getMoviesStart, getMoviesSuccess } from './MovieActions';

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
