import React, { useEffect, useState } from 'react'
import './shop.scss';
import ShopService from '../../services/ShopService';
import ProductSingle from '../../components/ProductSingle/ProductSingle';
// import ProductSingle from '../../components/ProductSingle/ProductSingle';

function Shop() {

    const [allProducts, setAllProducts] = useState([]);
    
    useEffect(() => {
        ShopService.getProducts()
                    .then(res => {
                        console.log(res);
                        if(res.status === 200){
                            setAllProducts(res.data);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
    }, []);

  return (
    <div className='shop-wrapper'>
        {
        allProducts.map((product, index) => {
            return (
                <ProductSingle productProps={product} key={product.id} />
            )
        })
        }
    </div>
  )
}

export default Shop