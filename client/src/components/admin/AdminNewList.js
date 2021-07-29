import React, { useContext, useEffect, useState } from 'react';
import storage from '../../firebase';
import { createMovie, getMovies } from '../context/movieContext/MovieApi';
import { ListContext } from '../context/listContext/ListContext';
import { MovieContext } from '../context/movieContext/MovieContext';

const AdminNewList = () => {
  const [list, setList] = useState(null);

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    const values = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: values });
  };

  console.log(list);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='newlist'>
      <h1 className='newlist__title'>New Movie</h1>
      <form className='newlist__form'>
        <div className='newlist__form-left'>
          <div className='newlist__item'>
            <label>Title</label>
            <input type='text' placeholder='Title' name='title' onChange={(e) => handleChange(e)} />
          </div>
          <div className='newlist__item'>
            <label>Genre</label>
            <input type='text' placeholder='Genre' name='genre' onChange={(e) => handleChange(e)} />
          </div>
          <div className='newlist__item'>
            <label>Type</label>
            <select name='type' onChange={(e) => handleChange(e)}>
              <option>Type</option>
              <option value='movie'>Movie</option>
              <option value='series'>Series</option>
            </select>
          </div>
        </div>

        <div className='newlist__form-right'>
          <div className='newlist__item'>
            <label>Content</label>
            <select
              multiple
              name='content'
              onChange={(e) => handleSelect(e)}
              className='newlist__select'
            >
              {movies.map((movie) => (
                <option value={movie._id} key={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className='newlist__create-btn' onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};

export default AdminNewList;
