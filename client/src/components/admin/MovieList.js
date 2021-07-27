import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { productRows } from '../../dummyData';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'movie',
      headerName: 'Movie',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='movielist__item'>
            <img src={params.row.image} alt='' className='movielist__image' />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/movie/${params.row.id}`}>
              <button className='movielist__edit-btn'>Edit</button>
            </Link>
            <DeleteOutline
              className='movielist__delete-btn'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='movielist'>
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

export default MovieList;
