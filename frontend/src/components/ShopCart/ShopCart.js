import React, { useEffect, useRef, useState } from 'react';
// import { MdAddShoppingCart } from "react-icons/md";
import {FaCartPlus, FaPlusCircle, FaMinusCircle} from "react-icons/fa";
import { useSelector } from 'react-redux';

import "./shop-cart.scss";

function ShopCart() {

    const {shopCart} = useSelector(state => state.shopCartStore);
    const shopCartRef = useRef();
    const [isActiveShopCart, setIsActiveShopCart] = useState(false);

    useEffect(() => {
        // console.log("useee eff => ", shopCart);
        // console.log("reff =>",shopCartRef.current);
        if(!shopCartRef){
            return;
        }
        if(shopCart.length){
            shopCartRef.current.classList.add("show-badge");
        }else{
            shopCartRef.current.classList.remove("show-badge");
        }
    }, [shopCart]);

    
    
    const handleShopCartView = () => {
        setIsActiveShopCart(!isActiveShopCart);
    }
    
    const shopCartAllLayout = () => {
        return (
            shopCart.map((item, index) => {
                return(
                    <div className='shop-cart-item' key={index} id={item._id} >
                        <img src={item.imageUrl} alt={item.title} />
                        <div className='shop-cart-item-info' >
                            <p> {item.title} </p>
                            <p> <FaMinusCircle className='shop-cart-item-info-icon' /> {item?.count} <FaPlusCircle className='shop-cart-item-info-icon' /> </p>
                        </div>
                        
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
                </div> :
                null

            }
        </div>
    </div>
  )
}

export default ShopCart