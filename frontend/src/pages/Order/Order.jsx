import React from 'react'
import Header from '../../components/Header/Header'
import OrderProcess from '../../components/OrderProcess/OrderProcess'

function Order() {
  return (
    <div className='order-wrapper'>
        <Header pageTitle={'order'} />
        <OrderProcess/>
    </div>
  )
}

export default Order