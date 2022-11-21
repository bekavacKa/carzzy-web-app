import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ShopCart from '../ShopCart/ShopCart';
import './shop-cart-badge.scss';

function ShopCartBadge() {
    const {shopCart} = useSelector(state => state.shopCartStore);
    const [cartPosition ,setCartPosition] = useState("position-bottom")

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
      },[])
    
    const listenToScroll = () => {
        if(window.scrollY > 50){
            setCartPosition("position-top");
        }else{
            setCartPosition("position-bottom");
        }
    }
  return (
    <>
    {
        shopCart.length > 0 ?
        <div className={`shop-cart-badge-wrapper ${cartPosition} animate__animated animate__fadeInTopLeft`}>
            <div className='shop-cart-badge-btn'>
                <ShopCart />
            </div>
        </div>
        :
        null
    }
    </>
  )
}

export default ShopCartBadge