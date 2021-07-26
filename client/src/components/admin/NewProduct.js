import React from 'react';

const NewProduct = () => {
  return (
    <div className='newproduct'>
      <h1 className='newproduct__title'>New Product</h1>
      <form className='newproduct__form'>
        <div className='newproduct__item'>
          <label>Image</label>
          <input type='file' id='file' />
        </div>
        <div className='newproduct__item'>
          <label>Name</label>
          <input type='text' placeholder='movie' />
        </div>
        <div className='newproduct__item'>
          <label>Stock</label>
          <input type='text' placeholder='123' />
        </div>
        <div className='newproduct__item'>
          <label>Active</label>
          <select name='active' id='active'>
            <option>none selected</option>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='newproduct__create-btn'>Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
