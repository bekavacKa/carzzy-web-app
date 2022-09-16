import React, { useEffect, useState } from 'react';
import './product-single.scss';

function ProductSingle(props) {
    const[product, setProduct] = useState({});

    useEffect(() => {
        // console.log(props);
        setProduct(props.productProps);
    },[props])

  return (
    <div className='product-single-wrapper'>

      {product.hasOwnProperty('image') ? 
        <div className='product-card'>
          {/* todo podilit info i sliku */}
          <img src={product.image} alt={product.title}  />
          <h2>{product.price}</h2>
        </div>
        : null
      }

    </div>
  )
}

export default ProductSingle