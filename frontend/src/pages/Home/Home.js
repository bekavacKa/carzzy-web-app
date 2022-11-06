import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import BannersCta from '../../components/BannersCta/BannersCta';
import Categories from '../../components/Categories/Categories';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import { setLoader } from '../../redux/loaderSlice';
import ShopService from '../../services/ShopService';
import './home.scss';

function Home() {

  const dispatch = useDispatch();
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    getAllBaners();
  },[]);

  // useEffect(() => {
  //   console.log(banners.length);
  // },[banners])

  const getAllBaners = () => {
    dispatch(setLoader(true));
    ShopService.getBanners()
                .then(res => {
                    // console.log("all data =>", res);
                    if(res.status === 200){
                        setBanners(res.data.reverse());
                    }
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => dispatch(setLoader(false)))
  }

  return (
    <div className='home-wrapper'>
      {/* <Header pageTitle={"home"} /> */}

      <div className='home-slider' >
        {
          banners.length > 0 && 
          <Slider slides={banners} dots={true} speed={2000}  />
        }
      </div>

      <BannersCta />
      <Categories/>

    </div>
  )
}

export default Home