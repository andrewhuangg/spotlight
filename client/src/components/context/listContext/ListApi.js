import axios from 'axios';
import {
  getListsStart,
  getListsSuccess,
  getListsFailure,
  createListStart,
  createListSuccess,
  createListFailure,
  deleteListStart,
  deleteListSuccess,
  deleteListFailure,
} from './ListActions';

export const getLists = async (dispatch) => {
  dispatch(getListsStart());

  try {
    const { data } = await axios.get('/lists', {
      headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).signedToken },
    });

    dispatch(getListsSuccess(data));
  } catch (error) {
    dispatch(getListsFailure());
  }
};

export const createList = async (list, dispatch) => {
  dispatch(createListStart());

  try {
    const { data } = await axios.post(`/lists`, list, {
      headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).signedToken },
    });

    dispatch(createListSuccess(data));
  } catch (error) {
    dispatch(createListFailure());
  }
};

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());

  try {
    await axios.delete(`/lists/${id}`, {
      headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).signedToken },
    });

    dispatch(deleteListSuccess(id));
  } catch (error) {
    dispatch(deleteListFailure());
  }
};
