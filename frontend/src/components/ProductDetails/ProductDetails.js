import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToShopCart } from '../../redux/shopSlice';
import ShopService from '../../services/ShopService';

import './product-details.scss';

function ProductDetails() {
    const [product, setProduct] = useState({});
    const [isHaveParams, setIsHaveParams] = useState(true);
    const [isApiFinished, setIsApiFinished] = useState(false);

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(()=> {
        // console.log(params);
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
                        })
        }else{
            setIsHaveParams(false);
        }
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
                <img src={product.imageUrl} alt={product.title} />
                <h2>{product.title}</h2>
                <h2>{product.description}</h2>
                <h2>{product.price}</h2>
                <h2>{product.rating}</h2>
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