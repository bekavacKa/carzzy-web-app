import React, { useEffect, useState } from 'react'
import { FaBlogger, FaConnectdevelop, FaSchlix, } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import BannersCta from '../../components/BannersCta/BannersCta';
import CardSlider from '../../components/CardSlider/CardSlider';
import Categories from '../../components/Categories/Categories';
// import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import { setLoader } from '../../redux/loaderSlice';
import ShopService from '../../services/ShopService';
import './home.scss';

function Home() {

  const dispatch = useDispatch();
  const [randomProducts, setRandomProducts] = useState([]);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    getAllBaners();
    getProducts();
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
  };

  const getProducts = () => {
    dispatch(setLoader(true));
    ShopService.getRandomProducts(15)
                .then(res => {
                    if(res.status === 200){
                        // console.log(res.data);
                        setRandomProducts(res.data)
                    }
                })
                .catch(err => console.log(err))
                .finally(() => dispatch(setLoader(false)))
};

  return (
    <div className='home-wrapper'>
      {/* <Header pageTitle={"home"} /> */}

      <div className='home-slider' >
        {
          banners.length > 0 && 
          <Slider slides={banners} dots={true} speed={2000}  />
        }
      </div>

      <BannersCta numBanners={3} />
      <Categories/>
      <CardSlider sliderTitle={'Special Products'} sliderIcon={<FaSchlix/>} sliderArrow={true} cardSliderItems={randomProducts} sliderTypeCard={true} />
      <BannersCta numBanners={1} />
      <CardSlider sliderTitle={'Featured Products'} sliderIcon={<FaConnectdevelop />} sliderArrow={true} cardSliderItems={randomProducts} sliderTypeCard={true} />

      <CardSlider sliderTitle={'Latest Blog'} sliderIcon={<FaBlogger/>} sliderArrow={true} cardSliderItems={banners} />

    </div>
  )
}

export default Home