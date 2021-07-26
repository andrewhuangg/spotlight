import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className='product'>
      <div className='product__header'>
        <h1 className='product__title'>Products</h1>
        <Link to='/admin/add-new-product'>
          <button className='product__add-btn'>Create</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
