import React from 'react';
import { Link } from 'react-router-dom';
import Chart from './Chart';
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';

const Product = () => {
  return (
    <div className='product'>
      <div className='product__header'>
        <h1 className='product__title'>Products</h1>
        <Link to='/admin/add-new-product'>
          <button className='product__add-btn'>Create</button>
        </Link>
      </div>
      <div className='product__top'>
        <div className='product__left'>
          <Chart data={productData} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className='product__right'>
          <div className='product__info-top'>
            <img
              className='product__info-image'
              src='https://images.unsplash.com/photo-1549820610-ec7475b33969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              alt=''
            />
            <span className='product__name'>Movie</span>
          </div>
          <div className='product__info-bottom'>
            <div className='product__item'>
              <span className='product__key'>id:</span>
              <span className='product__value'>123</span>
            </div>
            <div className='product__item'>
              <span className='product__key'>sales:</span>
              <span className='product__value'>123</span>
            </div>
            <div className='product__item'>
              <span className='product__key'>active:</span>
              <span className='product__value'>yes</span>
            </div>
            <div className='product__item'>
              <span className='product__key'>in stock:</span>
              <span className='product__value'>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className='product__bottom'>
        <form className='product__form'>
          <div className='product__form-left'>
            <label>Product Name</label>
            <input type='text' placeholder='movie' />
            <label>In Stock</label>
            <select name='inStock' id='idStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label>Active</label>
            <select name='active' id='idActive'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='product__form-right'>
            <div className='product__upload'>
              <img
                className='product__upload-image'
                src='https://images.unsplash.com/photo-1549820610-ec7475b33969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                alt=''
              />
              <label for='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className='product__update-btn'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
