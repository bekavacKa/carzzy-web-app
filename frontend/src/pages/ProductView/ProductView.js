import React from 'react'
import Header from '../../components/Header/Header'
import ProductDetails from '../../components/ProductDetails/ProductDetails'

function ProductView() {
  return (
    <div className='product-view-wrapper' >
        <Header pageTitle={"product viewing"} />
        <ProductDetails/>
    </div>
  )
}

export default ProductView