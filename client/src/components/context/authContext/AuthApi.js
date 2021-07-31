import axios from 'axios';
import { loginFailure, loginStart, loginSuccess } from './AuthActions';

export const adminLoginApi = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const { data } = await axios.post('/auth/login', user);
    data.isAdmin && dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const userLoginApi = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const { data } = await axios.post('/auth/login', user);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
