import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import routeConfig from '../../config/routeConfig';
import { setLoader } from '../../redux/loaderSlice';
import ShopService from '../../services/ShopService';
import './banners-cta.scss';

function BannersCta() {

    const dispatch = useDispatch();
    const [threeBanners, setThreeBanners] = useState([]);

    useEffect(() => {
        getThreeBanners();
    },[]);

    // useEffect(() => {
    //     console.log(threeBanners);
    // },[threeBanners]);

    const getThreeBanners = () => {
        dispatch(setLoader(true));
        ShopService.getRandomBanners(3)
                    .then(res => {
                        setThreeBanners(res.data);
                    })
                    .catch(err => console.log(err))
                    .finally(() => dispatch(setLoader(false)));
    };

    const bannersLayout = () => {
        return (
            threeBanners && 
            threeBanners.map((bann, index) => {
                return (
                <div className='banners-cta-poster' key={index} 
                    style={{
                        backgroundImage: `linear-gradient( rgba(11, 11, 11, 0.300), rgba(13, 13, 13, 0.850)), url(${bann.imageUrl})`
                    }}
                >
                    <div className='banners-cta-poster-holder'>
                        <h3 className='banners-cta-poster-title'>
                            {bann.title}
                        </h3>
                        <p className='banners-cta-poster-subtitle'>
                            {bann.subtitle}
                        </p>
                        <Link className='banners-cta-poster-btn' to={routeConfig.SHOP.url} >
                            {bann.buttonText}
                        </Link>
                    </div>
                </div>
                )
            })
        )
    }

  return (
    <div className='banners-cta-wrapper'>

        {
            bannersLayout()
        }

    </div>
  )
}

export default BannersCta