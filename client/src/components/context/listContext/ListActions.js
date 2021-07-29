export const GET_LISTS_START = 'GET_LISTS_START';
export const GET_LISTS_SUCCESS = 'GET_LISTS_SUCCESS';
export const GET_LISTS_FAILURE = 'GET_LISTS_FAILURE';
export const DELETE_LIST_START = 'DELETE_LIST_START';
export const DELETE_LIST_SUCCESS = 'DELETE_LIST_SUCCESS';
export const DELETE_LIST_FAILURE = 'DELETE_LIST_FAILURE';

export const getListsStart = () => ({
  type: GET_LISTS_START,
});

export const getListsSuccess = (lists) => ({
  type: GET_LISTS_SUCCESS,
  payload: lists,
});

export const getListsFailure = () => ({
  type: GET_LISTS_FAILURE,
});

export const deleteListStart = () => ({
  type: DELETE_LIST_START,
});

export const deleteListSuccess = (id) => ({
  type: DELETE_LIST_SUCCESS,
  payload: id,
});

export const deleteListFailure = () => ({
  type: DELETE_LIST_FAILURE,
});
