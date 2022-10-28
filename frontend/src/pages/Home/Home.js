import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Categories from '../../components/Categories/Categories';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import { setLoader } from '../../redux/loaderSlice';
import ShopService from '../../services/ShopService';
import './home.scss';

function Home() {

  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  },[]);

  useEffect(() => {
    console.log(products.length);
  },[products])

  const getAllProducts = () => {
    dispatch(setLoader(true));
    ShopService.getProducts()
                .then(res => {
                    console.log("all data =>", res);
                    if(res.status === 200){
                        setProducts(res.data.reverse());
                    }
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => dispatch(setLoader(false)))
  }

  return (
    <div className='home-wrapper'>
      <Header pageTitle={"home"} />

      <div className='home-slider' >
        {
          products && 
          <Slider slides={products} dots={true} speed={2000}  />
        }
      </div>

      <Categories/>

    </div>
  )
}

export default Home