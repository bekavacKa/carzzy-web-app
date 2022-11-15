import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {FaCartPlus, FaRegEye} from "react-icons/fa";

import { addToShopCart } from '../../redux/shopSlice';
import './product-single.scss';
import routeConfig from '../../config/routeConfig';
import RatingStars from '../RatingStars/RatingStars';

function ProductSingle(props, {cardInfo}) {
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
    <>
    { product && product.hasOwnProperty('imageUrl') ? 
        <div className='product-card'>

          <div className='product-card-img'>
              <img src={product.imageUrl} alt={product.title}  />
          </div>

          <RatingStars rating={product.rating} />

          <div className='product-card-info'>
            <p>{product.title}</p>
            <p>{product.price.toFixed(2)} $ </p>
            {product.category}
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
    </>
  )
}

export default ProductSingle