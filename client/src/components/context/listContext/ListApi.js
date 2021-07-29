import axios from 'axios';
import {
  getListsStart,
  getListsSuccess,
  getListsFailure,
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
