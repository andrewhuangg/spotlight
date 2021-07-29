import React, { useContext, useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { ListContext } from '../context/listContext/ListContext';
import { getLists, deleteList } from '../context/listContext/ListApi';

const AdminLists = () => {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    { field: 'title', headerName: 'Title', width: 250 },
    { field: 'genre', headerName: 'Genre', width: 150 },
    { field: 'type', headerName: 'Type', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname: `/admin/list/${params.row._id}`, list: params.row }}>
              <button className='movielist__edit-btn'>Edit</button>
            </Link>
            <DeleteOutline
              className='movielist__delete-btn'
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='movielist'>
      <DataGrid
        rows={lists}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default AdminLists;
