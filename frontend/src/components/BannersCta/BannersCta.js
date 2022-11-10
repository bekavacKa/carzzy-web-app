import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import routeConfig from '../../config/routeConfig';
import { setLoader } from '../../redux/loaderSlice';
import ShopService from '../../services/ShopService';
import './banners-cta.scss';

function BannersCta({numBanners}) {

    const dispatch = useDispatch();
    const [moreBanners, setMoreBanners] = useState([]);
    const [singleBanner, setSingleBanner] = useState();

    useEffect(() => {
        // console.log(numBanners);
        numBanners && numBanners === 1 ? 
        getSingleBanner() :
        getMoreBanners();
    },[numBanners]);

    // useEffect(() => {
    //     console.log(moreBanners);
    //     console.log(singleBanner);
    // },[moreBanners]);

    const getSingleBanner = () => {
        dispatch(setLoader(true));
        if(numBanners){
            // console.log(numBanners);
            ShopService.getRandomBanners(numBanners)
                        .then(res => {
                            setSingleBanner(res.data)
                        })
                        .catch(err => console.log(err))
                        .finally(() => dispatch(setLoader(false)));
        }
    };

    const getMoreBanners = () => {
        dispatch(setLoader(true));
        if(numBanners){
            ShopService.getRandomBanners(numBanners)
                        .then(res => {
                            setMoreBanners(res.data)
                        })
                        .catch(err => console.log(err))
                        .finally(() => dispatch(setLoader(false)));
        }
    };

    const singleBannerLayout = () => {
        if(singleBanner && numBanners === 1){
            // console.log(singleBanner);
            return (
                <div className='banners-cta-poster single-banner' 
                style={{
                    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${singleBanner[0].imageUrl})`
                }}
            >
                <div className='banners-cta-poster-holder'>
                    <h3 className='banners-cta-poster-title'>
                        {singleBanner[0].title}
                    </h3>
                    <p className='banners-cta-poster-subtitle'>
                        {singleBanner[0].subtitle}
                        {singleBanner[0].subtitle}
                    </p>
                    <Link className='banners-cta-poster-btn' to={routeConfig.SHOP.url} >
                        {singleBanner[0].buttonText}
                    </Link>
                </div>
            </div>
            )
        }
    }



    const moreBannersLayout = () => {
        if(moreBanners && numBanners > 1){
            return (
                moreBanners && 
                moreBanners.map((bann, index) => {
                    return (
                    <div className='banners-cta-poster more-banners' key={index} 
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
    }

  return (
    <div className='banners-cta-wrapper'>

        {
            numBanners && numBanners === 1 ?
            singleBannerLayout() :
            moreBannersLayout()
        }

    </div>
  )
}

export default BannersCta