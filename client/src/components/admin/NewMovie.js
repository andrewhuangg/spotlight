import React from 'react';

const NewMovie = () => {
  return (
    <div className='newmovie'>
      <h1 className='newmovie__title'>New Product</h1>
      <form className='newmovie__form'>
        <div className='newmovie__item'>
          <label>Image</label>
          <input type='file' id='file' />
        </div>
        <div className='newmovie__item'>
          <label>Name</label>
          <input type='text' placeholder='movie' />
        </div>
        <div className='newmovie__item'>
          <label>Stock</label>
          <input type='text' placeholder='123' />
        </div>
        <div className='newmovie__item'>
          <label>Active</label>
          <select name='active' id='active'>
            <option>none selected</option>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='newmovie__create-btn'>Create</button>
      </form>
    </div>
  );
};

export default NewMovie;
