import React, { useEffect, useRef, useState } from 'react';
// import { MdAddShoppingCart } from "react-icons/md";
import {FaCartPlus, FaPlusCircle, FaMinusCircle, FaTrash} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import routeConfig from '../../config/routeConfig';
import { deleteFromShopCart, handleItemCountShopCart } from '../../redux/shopSlice';

import { BACKEND_URL_CONFIG } from '../../config/backendUrlConfig';

import "./shop-cart.scss";

function ShopCart() {

    const {shopCart} = useSelector(state => state.shopCartStore);
    const shopCartRef = useRef();
    const [isActiveShopCart, setIsActiveShopCart] = useState(false);


    const dispatch = useDispatch();

    useEffect(() => {
        // console.log("useee eff => ", shopCart);
        // console.log("reff =>",shopCartRef.current);
        if(!shopCartRef){
            return;
        }
        if(shopCart.length){
            shopCartRef.current.classList.add("show-badge");
            // todo moram na unmount spremit shopcart u ls ili smislit nesto bolje
            localStorage.setItem('shopCart', JSON.stringify(shopCart));
        }else{
            shopCartRef.current.classList.remove("show-badge");
        }

    }, [shopCart]);

    
    
    const handleShopCartView = () => {
        setIsActiveShopCart(!isActiveShopCart);
    }

    const deleteItemFromShopCart = (index) => {
        dispatch(deleteFromShopCart(index))
    }

    const handleItemCount = (index, isIncrement) => {
        dispatch(handleItemCountShopCart({index, isIncrement}));
    }
    
    const shopCartAllLayout = () => {
        return (
            shopCart.map((item, index) => {
                return(
                    <div className='shop-cart-item' key={index} id={item._id} >
                        
                        <div className='shop-cart-item-img'>
                            <img src={`${BACKEND_URL_CONFIG.PRODUCT_IMAGE_PATH.url}${item.imageFile}`} alt={item.title} />
                        </div>
                        
                        <div className='shop-cart-item-info' >
                            <p>{item.title} </p>    
                            <p>{item.totalPrice} $</p>
                        </div>
                        
                        <div className='shop-cart-item-btns'>
                            {item.count > 1 && 
                                <div className='shop-cart-item-updown'>
                                <FaPlusCircle className='shop-cart-item-updown-icon' onClick={() => handleItemCount(index, true)} /> 
                                <p className='shop-cart-item-updown-count'>{item?.count}</p> 
                                <FaMinusCircle className='shop-cart-item-updown-icon minus' onClick={() => handleItemCount(index, false)} /> 
                                </div>
                            }
                        </div>

                        <FaTrash className='shop-cart-item-trash' onClick={() => deleteItemFromShopCart(index)} />
                        
                    </div>
                )
            })
        )
    }

  return (
    <div className='shop-cart-wrapper'>
        <div ref={shopCartRef} className='shop-cart' >
            <FaCartPlus onClick={handleShopCartView} className='shop-cart-icon' />  
            <span className='shop-cart-badge '>{shopCart.length}</span>

            {
                isActiveShopCart && shopCart.length ? 
                <div className='shop-cart-container' >
                    {
                    shopCartAllLayout()
                    }
                    <div className='shop-cart-footer' >
                        <Link to={routeConfig.ORDER.url}>
                            <button className='shop-cart-footer-btn' onClick={e => setIsActiveShopCart(false)} >Order</button>
                        </Link>
                    </div>
                </div> :
                null
            }
        </div>
    </div>
  )
}

export default ShopCart