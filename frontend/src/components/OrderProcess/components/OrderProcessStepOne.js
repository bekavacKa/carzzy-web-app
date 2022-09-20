import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {FaPlusCircle, FaMinusCircle, FaTrash} from "react-icons/fa";
import { deleteFromShopCart, handleItemCountShopCart } from '../../../redux/shopSlice';




function OrderProcessStepOne() {

    const {shopCart} = useSelector(state => state.shopCartStore);
    const dispatch = useDispatch();

    useEffect(()=> {
        console.log("shopCart => ", shopCart);
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
                <th scope="row" >{index +1}</th>
                <td>
                    <img src={item.imageUrl} alt={item.title} />
                </td>
                <td>{item.title}</td>
                <td>
                    {
                        item.count > 1 ?
                        <FaMinusCircle onClick={() => handleItemCount (index, false)} /> :
                        null 
                    }
                    {item.count} 
                    
                    <FaPlusCircle onClick={() => handleItemCount (index, true)} /> 
                </td>
                <td>{item.price * item.count}</td>
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
        <h2>OrderProcessStepOne</h2>
        <table className="table table-sm order-process-step-one-table">
            <thead>
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">No. Pieces</th>
                    <th scope="col">Price</th>
                    <th scope="col">  </th>
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