import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {FaCartPlus, FaRegEye} from "react-icons/fa";

import { addToShopCart } from '../../redux/shopSlice';
import './product-single.scss';
import routeConfig from '../../config/routeConfig';

function ProductSingle(props) {
  const dispatch = useDispatch();


    const[product, setProduct] = useState({});

    useEffect(() => {
        // console.log("propppp",props);
        setProduct(props.productProps);
    },[props]);

    const addToCart = () => {
      // console.log("CARRTT", product);
      dispatch(addToShopCart(product));
  }

  return (
    <div className='product-single-wrapper'>

      {product.hasOwnProperty('imageUrl') ? 
        <div className='product-card'>
          
          <div className='product-card-img'>
            <Link to={routeConfig.SHOP_SINGLE_PRODUCT.completeUrl(product._id)} >
              <img src={product.imageUrl} alt={product.title}  />
            </Link>
          </div>

          <div className='product-card-info'>
            <p>{product.title}</p>
            <p>{product.price.toFixed(2)} $ </p>
          </div>

          <div className='product-card-btns' >
            <Link to={routeConfig.SHOP_SINGLE_PRODUCT.completeUrl(product._id)} >
              <button className='product-card-btns-view' >
                <FaRegEye/>
              </button>
            </Link>
            <button className='product-card-btns-add' onClick={addToCart} > 
              < FaCartPlus /> 
            </button>
          </div>

        </div>
        : null
      }

    </div>
  )
}

export default ProductSingle