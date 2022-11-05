import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaCircle } from 'react-icons/fa';
import './slider.scss';

function Slider({slides, dots, speed}) {

    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    useEffect(() => {
        console.log(slides.length);
        console.log(slides[currentImgIndex]);
    },[slides]);
    
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

    const sliderLayout = () => {
        return (
            slides.length &&
            <>
                <div className='slider-arrow left' onClick={slidePrevious}>
                    <FaAngleLeft/>
                </div>
                <div className='slider-arrow right' onClick={slideNext}>
                    <FaAngleRight />
                </div>

                <div className={`slider-holder ${slides[currentImgIndex]?.infoPosition}`} style={{backgroundImage: `url(${slides[currentImgIndex]?.imageUrl})`}}>

                    <div className='slider-content move'>
                        <h2 className='slider-content-title'>{slides[currentImgIndex]?.title}</h2>
                        <h3 className='slider-content-subtitle'>{slides[currentImgIndex]?.subtitle}</h3>
                        <button className='slider-content-btn'>{slides[currentImgIndex]?.buttonText}</button>
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
    }

  return (
    <div className='slider-wrapper'>
        {
            sliderLayout()
        }
    </div>
  )
}

export default Slider