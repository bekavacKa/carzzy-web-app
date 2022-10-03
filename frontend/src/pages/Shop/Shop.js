import React, { useEffect, useState } from 'react'
import './shop.scss';
import ShopService from '../../services/ShopService';
import ProductSingle from '../../components/ProductSingle/ProductSingle';
import Header from '../../components/Header/Header';
import SearchFilter from '../../components/SearchFilter/SearchFilter';
import { useDispatch } from 'react-redux';
import { setLoader } from '../../redux/loaderSlice';
// import ProductSingle from '../../components/ProductSingle/ProductSingle';

function Shop() {

    const [allProducts, setAllProducts] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setLoader(true));

        ShopService.getProducts()
                    .then(res => {
                        // console.log("all data =>", res);
                        if(res.status === 200){
                            setAllProducts(res.data);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
                    .finally(() => dispatch(setLoader(false)))
    }, []);

  return (
    <>
        <Header pageTitle={"shop"} />
    <div className='shop-wrapper'>
        <SearchFilter/>
        {
            allProducts.map((product, index) => {
                return (
                    <ProductSingle productProps={product} key={product._id} />
                )
            })
        }
    </div>
    </>
  )
}

export default Shop