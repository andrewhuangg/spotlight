import React, { useContext, useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { MovieContext } from '../context/movieContext/MovieContext';
import { deleteMovie, getMovies } from '../context/movieContext/MovieApi';

const MovieList = () => {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'movie',
      headerName: 'Movie',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='movielist__item'>
            <img src={params.row.imageHero} alt='' className='movielist__image' />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'genre', headerName: 'Genre', width: 120 },
    { field: 'isSeries', headerName: 'isSeries', width: 120 },
    { field: 'year', headerName: 'Year', width: 120 },
    { field: 'limit', headerName: 'Limit', width: 120 },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname: `/admin/movie/${params.row._id}`, movie: params.row }}>
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
        rows={movies}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default MovieList;
