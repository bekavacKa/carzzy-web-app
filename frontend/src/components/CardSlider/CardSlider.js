import React, { useEffect, useRef, useState } from 'react';
import { useId } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import ProductSingle from '../ProductSingle/ProductSingle';
import './card-slider.scss';

function CardSlider({sliderTitle, cardSliderItems, sliderTypeCard, sliderArrow, sliderIcon, cardInfo, sliderTypeBlog, sliderTypeSponsor}) {

    const sliderId = useId();

    // POPRAVIT BUG NA STRELICAMA !!!!!!!!!!
    // * DONE
    const [sliderItems, setSliderItems] = useState([]);

    useEffect(() => {
        // console.log(sliderId);
        if(cardSliderItems){
            setSliderItems(cardSliderItems)
        }
    },[cardSliderItems]);

    const goPrev = () => {
        let slider = document.getElementById(sliderId);
        slider.scrollLeft = slider.scrollLeft - 500;
        // console.log(slider.scrollLeft);
    };

    const goNext = () => {
        let slider = document.getElementById(sliderId);
        slider.scrollLeft = slider.scrollLeft + 500;
        // console.log(slider.scrollLeft);
    };

    const sliderCardLayout = () => {
        return (
            sliderItems.length > 0 &&
                <div className='card-slider-wrapper'>
                    
                    <div className='card-slider-header' >
                        {
                            sliderTitle &&
                            <div className='card-slider-header-title'>
                                <span>
                                    {
                                        sliderIcon && sliderIcon
                                    }
                                </span>
                                <h2>
                                    {sliderTitle}
                                </h2>
                            </div>
                        }
                        {
                            sliderArrow &&
                            <div className='card-slider-header-btns'>
                                <FaAngleLeft className='arrow' onClick={goPrev} />
                                <FaAngleRight className='arrow' onClick={goNext} />
                            </div>
                        }
                    </div>

                    <div className='card-slider-holder' id={sliderId} >
                        {
                            sliderItems.map(product => {
                                return(
                                    <ProductSingle productProps={product} cardInfo={cardInfo} key={product._id} />
                                )
                            })
                        }
                    </div>

                </div>
        )
    };

    const sliderImageLayout = () => {
        return (
            sliderItems.length > 0 ?
            <div className='card-slider-wrapper'>
                
                <div className='card-slider-header' >
                    {
                        sliderTitle &&
                        <div className='card-slider-header-title'>
                            <span>
                                {
                                    sliderIcon && sliderIcon
                                }
                            </span>
                            <h2>
                                {sliderTitle}
                            </h2>
                        </div>
                    }
                    {
                        sliderArrow &&
                        <div className='card-slider-header-btns'>
                            <FaAngleLeft className='arrow' onClick={goPrev} />
                            <FaAngleRight className='arrow' onClick={goNext} />
                        </div>
                    }
                </div>

                <div className='card-slider-holder-image' id={sliderId} >

                        {
                            sliderItems.map((item, index) => {
                                return(
                                    <div title='COMING SOON :D' className='card-slider-holder-image-container' key={index}>
                                        <div className='card-slider-holder-image-slide' 
                                            style={{backgroundImage: ` url(${item.imageUrl})`}}  >

                                        </div>
                                        <div className='card-slider-holder-image-badge'>
                                            <p>
                                                {item.publishDate}
                                            </p>
                                        </div>
                                        <div className='card-slider-holder-image-title'>
                                            <p>
                                                {item.title}
                                            </p>
                                        </div>
                                        <div className='card-slider-holder-image-publisher'>
                                            <p>
                                                Posted by
                                            </p>
                                            <p className='publisher-name'>
                                                {item.publisher}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>

            </div>  
            :
            null
        )
    };

    const sliderTypeSponsorLayout = () => {
        return (
            sliderItems.length > 0 ?
            <div className='card-slider-wrapper'>
                
                <div className='card-slider-header' >
                    {
                        sliderTitle &&
                        <div className='card-slider-header-title'>
                            <span>
                                {
                                    sliderIcon && sliderIcon
                                }
                            </span>
                            <h2>
                                {sliderTitle}
                            </h2>
                        </div>
                    }
                </div>
                {
                    sliderArrow &&
                    <>
                        <div className='card-slider-sponsors-arrow left'>
                            <FaAngleLeft className='arrow' onClick={goPrev} />
                        </div>
                        <div className='card-slider-sponsors-arrow right'>
                            <FaAngleRight className='arrow' onClick={goNext} />
                        </div>
                    </>
                }

                <div className='card-slider-sponsors-holder' id={sliderId} >
                        {
                            sliderItems.map((item, index) => {
                                return(
                                    <img src={item.imageUrl} className='card-slider-sponsors-holder-img' key={index} alt={item.title} />
                                )
                            })
                        }
                </div>

            </div>  
            :
            null
        )
    }


  return (
    <>
        {
            sliderTypeCard && sliderItems.length > 0 ? 
            sliderCardLayout()
            :
            null
        }
        {
            sliderTypeBlog && sliderItems.length > 0 ?
            sliderImageLayout()
            :null
        }
        {
            sliderTypeSponsor && sliderItems.length > 0 ?
            sliderTypeSponsorLayout()
            :
            null
        }

    </>

  )
}

export default CardSlider