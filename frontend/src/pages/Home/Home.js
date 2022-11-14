import React, { useEffect, useState } from 'react'
import { FaBimobject, FaFoursquare, FaSchlix, } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import BannersCta from '../../components/BannersCta/BannersCta';
import CardSlider from '../../components/CardSlider/CardSlider';
import Categories from '../../components/Categories/Categories';
import ImpressionsUser from '../../components/ImpressionsUser/ImpressionsUser';
// import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import SubscribeMe from '../../components/SubscribeMe/SubscribeMe';
import { setLoader } from '../../redux/loaderSlice';
import BlogService from '../../services/BlogService';
import ShopService from '../../services/ShopService';
import './home.scss';

function Home() {

  const dispatch = useDispatch();
  const [randomProducts, setRandomProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [banners, setBanners] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    getAllBaners();
    getRandProducts();
    getFeaturedProducts();
    getLatestBlogs();
  },[]);

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

  const getRandProducts = () => {
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

  // Todo zaminut sa featured products kad im dodam property
  const getFeaturedProducts = () => {
    dispatch(setLoader(true));
    ShopService.getRandomProducts(10)
                .then(res => {
                    if(res.status === 200){
                        // console.log(res.data);
                        setFeaturedProducts(res.data)
                    }
                })
                .catch(err => console.log(err))
                .finally(() => dispatch(setLoader(false)))
  }

  const getLatestBlogs = () => {
    dispatch(setLoader(true))
    BlogService.getBlogs()
                .then(res => {
                  if(res.status === 200){
                    setLatestBlogs(res.data.reverse())
                  }
                })
                .catch(err => console.log(err))
                .finally(() => dispatch(setLoader(false)))
  }

  return (
    <div className='home-wrapper'>
      {/* <Header pageTitle={"home"} /> */}

      <div className='home-slider' >
        {
          banners.length > 0 && 
          <Slider slides={banners} bannerSlider={true} dots={true} speed={2000}  />
        }
      </div>

      <BannersCta numBanners={3} />
      <Categories/>
      <CardSlider sliderTitle={'Special Products'} cardInfo={true} sliderIcon={<FaSchlix/>} sliderArrow={true} cardSliderItems={randomProducts} sliderTypeCard={true} />
      <BannersCta numBanners={1} />
      <CardSlider sliderTitle={'Featured Products'} sliderIcon={<FaFoursquare />} sliderArrow={true} cardSliderItems={featuredProducts} sliderTypeCard={true} />
      <ImpressionsUser />
      <SubscribeMe />

      <CardSlider sliderTitle={'Latest Blog'} sliderIcon={<FaBimobject />} sliderArrow={true} cardSliderItems={latestBlogs} />

    </div>
  )
}

export default Home