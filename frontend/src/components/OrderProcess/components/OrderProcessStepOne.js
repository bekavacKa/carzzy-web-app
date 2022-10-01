import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {FaPlusCircle, FaMinusCircle, FaTrash} from "react-icons/fa";
import { deleteFromShopCart, handleItemCountShopCart } from '../../../redux/shopSlice';

import "../scss/order-process-step-one.scss";




function OrderProcessStepOne() {

    const {shopCart} = useSelector(state => state.shopCartStore);
    const dispatch = useDispatch();

    useEffect(()=> {
        // console.log("shopCart => ", shopCart);
    },[shopCart]);

    const handleItemCount = (index, isIncrement) => {
        dispatch(handleItemCountShopCart({index, isIncrement}));
    }

    const deleteItemFromShopCart = (index) => {
        dispatch(deleteFromShopCart(index))
    }

    const tableRowLayout = () => {
        return shopCart.map((item, index) => {
            return (
            <tr key={index}>
                <th >{index +1}</th>
                <td>
                    <img src={item.imageUrl} alt={item.title} />
                </td>
                <td>{item.title}</td>
                <td>
                    {
                        item.count > 1 ?
                        <FaMinusCircle className='minus-plus' onClick={() => handleItemCount (index, false)} /> :
                        null 
                    }
                    {item.count} 
                    
                    <FaPlusCircle className='minus-plus' onClick={() => handleItemCount (index, true)} /> 
                </td>
                <td>{item.totalPrice} $</td>
                <td>
                    <FaTrash onClick={() => deleteItemFromShopCart(index)} />
                </td>

            </tr>
            )
        })
    }

    const emptyShopCartLayout = () => {
        return (
            !shopCart.length && <p>No Selected Products!</p>
        )
    }

  return (
    <div className='order-process-step-one-wrapper'>
        {/* <h2>OrderProcessStepOne</h2> */}
        <table className="order-one-table">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>No. Pieces</th>
                    <th>Price</th>
                    <th>  </th>
                </tr>
            </thead>
            <tbody>
                {
                    tableRowLayout()
                }
            </tbody>
        </table>
        {emptyShopCartLayout()}
    </div>
  )
}

export default OrderProcessStepOne