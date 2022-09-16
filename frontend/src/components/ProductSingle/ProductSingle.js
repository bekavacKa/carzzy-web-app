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
          
          <div className='product-card-img'>
            <img src={product.image} alt={product.title}  />
          </div>

          <div className='product-card-info'>
            <p>Info</p>
            <p>{product.price}</p>
          </div>

        </div>
        : null
      }

    </div>
  )
}

export default ProductSingle