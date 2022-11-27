import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToShopCart } from '../../redux/shopSlice';
import ShopService from '../../services/ShopService';
import RatingStars from '../RatingStars/RatingStars';

import { BACKEND_URL_CONFIG } from '../../config/backendUrlConfig';

import './product-details.scss';
import { setLoader } from '../../redux/loaderSlice';

function ProductDetails() {
    const [product, setProduct] = useState({});
    const [isHaveParams, setIsHaveParams] = useState(true);
    const [isApiFinished, setIsApiFinished] = useState(false);

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(()=> {
        // console.log(params);
        dispatch(setLoader(true));
        if(params.productId){
            ShopService.getSingleProduct(params.productId)
                        .then((res)=>{
                            if(res.status === 200){
                                setProduct(res.data);
                            }if(!res.data){
                                setIsHaveParams(false);
                            }
                        })
                        .catch((err)=>{
                            console.log("EROOR DETAILS", err);
                            setIsHaveParams(false);
                        })
                        .finally(()=>{
                            setIsApiFinished(true);
                            dispatch(setLoader(false));
                        })
        }else{
            setIsHaveParams(false);
        }
        // console.log(`${BACKEND_URL_CONFIG.PRODUCT_IMAGE_PATH.url}${product.imageFile}`)
    },[params]);

    const noParamsMsgLayout = () => {
        return(
            !isHaveParams ?
            <p>NO product ID</p> :
            null
        )
    };

    const addToCart = () => {
        // console.log("CARRTT", product);
        dispatch(addToShopCart(product));
    }

    const productLayout = () => {
        return (
            isApiFinished &&
            <div className='product-details'>
                <div className='product-details-title'>
                    <h3>{product.title}</h3>
                    <RatingStars rating={product.rating} />
                </div>
                <div className='product-details-image'>
                    {/* {console.log(`${BACKEND_URL_CONFIG.PRODUCT_IMAGE_PATH.url}${product.imageFile}`)} */}
                    <img src={`${BACKEND_URL_CONFIG.PRODUCT_IMAGE_PATH.url}${product.imageFile}`} alt={product.title} />
                    <h3>PRICE: &nbsp; {product.price.toFixed(2)} &nbsp; $ </h3>
                </div>
                <div className='product-details-info' >
                    <p>{product.description}</p>
                </div>
                <button onClick={addToCart} > ADD to cart </button>
            </div>
        )
    };


  return (
    <div className='product-details-wrapper'>
        {noParamsMsgLayout()}
        {
            product.hasOwnProperty('_id') && productLayout()
        }
    </div>
  )
}

export default ProductDetails