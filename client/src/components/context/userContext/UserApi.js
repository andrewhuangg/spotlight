import axios from 'axios';
import {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  getUserStart,
  getUserSuccess,
  getUserFailure,
  createUserStart,
  createUserSuccess,
  createUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} from './UserActions';

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());

  try {
    const { data } = await axios.get(`/users`, {
      headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).signedToken },
    });

    dispatch(getUsersSuccess(data));
  } catch (error) {
    dispatch(getUsersFailure());
  }
};

export const getUser = async (id, dispatch) => {
  dispatch(getUserStart());

  try {
    const { data } = await axios.get(`/users/${id}`, {
      headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).signedToken },
    });

    dispatch(getUserSuccess(data));
    return Promise.resolve(data);
  } catch (error) {
    dispatch(getUserFailure());
  }
};

export const createUser = async (user, dispatch) => {
  dispatch(createUserStart());

  try {
    const { data } = await axios.post(`/auth/register`, user, {
      headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).signedToken },
    });

    dispatch(createUserSuccess(data));

    return Promise.resolve(data);
  } catch (error) {
    dispatch(createUserFailure());
  }
};

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());

  try {
    const { data } = await axios.put(`/users/${id}`, user, {
      headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).signedToken },
    });

    dispatch(updateUserSuccess(data));

    return Promise.resolve(data);
  } catch (error) {
    dispatch(updateUserFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());

  try {
    await axios.delete(`/users/${id}`, {
      headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).signedToken },
    });

    dispatch(deleteUserSuccess(id));
  } catch (error) {
    dispatch(deleteUserFailure());
  }
};
