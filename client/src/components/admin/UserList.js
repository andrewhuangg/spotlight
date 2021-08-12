import React, { useContext, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext/UserContext';
import { getUsers, deleteUser } from '../context/userContext/UserApi';

const UserList = () => {
  const { users, dispatch } = useContext(UserContext);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 150 },
    {
      field: 'user',
      headerName: 'Username',
      width: 300,
      renderCell: (params) => {
        return (
          <div className='userlist__user'>
            <img src={params.row.profileImage} alt='' className='userlist__image' />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 300 },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/user/${params.row._id}`}>
              <button className='userlist__edit-btn'>Edit</button>
            </Link>
            <DeleteOutline
              className='userlist__delete-btn'
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='userlist'>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default UserList;
