import React, { useEffect, useState } from 'react';
import './product-single.scss';

function ProductSingle(props) {
    const[product, setProduct] = useState({});

    useEffect(() => {
        // console.log(productProps);
        console.log(props);
        setProduct(props.productProps);
    },[])

  return (
    <div className='product-single-wrapper'>

      {product.hasOwnProperty('image') ? 
        <div className='product-card'>
          <h2>{product.category}</h2>
            <img src={product.image}  />
        </div>
        : null
      }

    </div>
  )
}

export default ProductSingle