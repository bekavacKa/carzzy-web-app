import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './product-single.scss';

function ProductSingle(props) {
    const[product, setProduct] = useState({});

    useEffect(() => {
        // console.log("propppp",props);
        setProduct(props.productProps);
    },[props])

  return (
    <div className='product-single-wrapper'>

      {product.hasOwnProperty('imageUrl') ? 
        <div className='product-card'>
          
          <div className='product-card-img'>
            <img src={product.imageUrl} alt={product.title}  />
          </div>

          <div className='product-card-info'>
            <p>Info</p>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <Link to={`/shop/product/${product._id}`} >
              <button>VIEW</button>
            </Link>
          </div>

        </div>
        : null
      }

    </div>
  )
}

export default ProductSingle