import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaCircle, FaConnectdevelop } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import routeConfig from '../../config/routeConfig';
import './slider.scss';

function Slider({slides, dots, speed, bannerSlider, impressionsSlider}) {

    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    // useEffect(() => {
    //     console.log(slides.length);
    //     console.log(slides[currentImgIndex]);
    // },[slides]);
    
    // useEffect(() => {
    //     speed && slideAutomatic(speed);
    //     // console.log("aloooo");
    //     // console.log(currentImgIndex);
    // },[currentImgIndex]);

    //Todo baguje mi na klik dot kad mi je upaljen automatski jer postavljam dva razlicita indexa
    const slideAutomatic = (speed) => {
        setTimeout(() => {
            const isLastSlide = currentImgIndex === slides.length - 1;
            const newIndex = isLastSlide ? 0 : currentImgIndex + 1;
            setCurrentImgIndex(newIndex);     
        }, speed);
    }

    const slideNext = () => {
        const isLastSlide = currentImgIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentImgIndex + 1;
        setCurrentImgIndex(newIndex);
    };

    const slidePrevious = () => {
        const isFirstSlide = currentImgIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentImgIndex - 1;
        setCurrentImgIndex(newIndex);
    }

    const slideSpecific = (index) => {
        setCurrentImgIndex(index);
    }

    const handleKeyPress = (e) => {
        if(e.key === "ArrowRight"){
            return slideNext();
        }
        if(e.key === "ArrowLeft"){
            return slidePrevious();
        }
    }

    const sliderLayout = () => {
        return (
            slides.length &&
            <>
                <div className='slider-arrow left' onClick={slidePrevious} >
                    <FaAngleLeft/>
                </div>
                <div className='slider-arrow right' onClick={slideNext}>
                    <FaAngleRight />
                </div>

                <div className={`slider-holder ${slides[currentImgIndex]?.infoPosition}`} style={{backgroundImage: `url(${slides[currentImgIndex]?.imageUrl})`}}>

                    <div className='slider-content move'>
                        <h2 className='slider-content-title'>{slides[currentImgIndex]?.title}</h2>
                        {/* <h3 className='slider-content-subtitle'>{slides[currentImgIndex]?.subtitle}</h3> */}
                        <Link className='slider-content-btn' to={routeConfig.SHOP.url}>{slides[currentImgIndex]?.buttonText}</Link>
                    </div>
                    
                </div>

                {
                    dots && 
                    <div className='slider-nav'>
                        {
                            slides.map((img, index) => {
                                return(
                                    <div className={`slider-nav-dot ${currentImgIndex === index && 'active-dot'}`} key={index} onClick={() => slideSpecific(index)}>
                                        <FaCircle /> 
                                    </div>
                                )
                            })
                        }

                    </div>
                }
            </>
        )
    };

    const impressionsSliderLayout = () => {
        return (
            slides.length &&
            <div className='slider-impression'>

                <div className='slider-impression-title'>
                    <span className='slider-impression-title-icon'>
                        <FaConnectdevelop />
                    </span>
                    <h2>
                        What our clients say
                    </h2>
                </div>
                
                {
                    dots && 
                    <div className='slider-impression-nav'>
                        {
                            slides.map((img, index) => {
                                return(
                                    <div className={`slider-impression-nav-dot ${currentImgIndex === index && 'active-dot'}`} key={index} onClick={() => slideSpecific(index)}>
                                        <FaCircle /> 
                                    </div>
                                )
                            })
                        }

                    </div>
                }

                <div className='slider-impression-holder'>
                    <div className='slider-impression-holder-image' style={{backgroundImage: `url(${slides[currentImgIndex]?.imageUrl})`}}>
                    </div>

                    <div className='slider-impression-holder-text'>
                        <q> 
                            {
                                slides[currentImgIndex]?.userText
                            }
                        </q>
                        <h3>
                            {
                                slides[currentImgIndex]?.name
                            }
                        </h3>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <> 
        {
            slides.length > 0 ?
            <div className='slider-wrapper' tabIndex={0}  onKeyDown={handleKeyPress}>
                {
                    bannerSlider &&
                    sliderLayout()
                }
                {
                    impressionsSlider &&
                    impressionsSliderLayout()
                }
            </div>
            :
            null
        }
    </>
  )
}

export default Slider