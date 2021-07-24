import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { userRows } from '../../dummyData';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='userlist__user'>
            <img src={params.row.avatar} alt='' className='userlist__image' />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/user/${params.row.id}`}>
              <button className='userlist__edit-btn'>Edit</button>
            </Link>
            <DeleteOutline
              className='userlist__delete-btn'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='userlist'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
