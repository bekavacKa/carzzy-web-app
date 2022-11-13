import React, { useEffect, useRef, useState } from 'react';
import { useId } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import ProductSingle from '../ProductSingle/ProductSingle';
import './card-slider.scss';

function CardSlider({sliderTitle, cardSliderItems, sliderTypeCard, sliderArrow, sliderIcon}) {

    // const dispatch = useDispatch();
    const sliderId = useId();

    // const sliderHolder = useRef();
    // POPRAVIT BUG NA STRELICAMA !!!!!!!!!!
    // * DONE
    const [sliderItems, setSliderItems] = useState([]);

    useEffect(() => {
        // console.log(sliderId);
        if(cardSliderItems){
            setSliderItems(cardSliderItems)
        }
    },[cardSliderItems]);
    
    // useEffect(() => {
    //     console.log(sliderItems);
    // },[sliderItems]);

    const goPrev = () => {
        // console.log("prev");
        let slider = document.getElementById(sliderId);
        slider.scrollLeft = slider.scrollLeft - 500;
        // console.log(slider.scrollLeft);
    };

    const goNext = () => {
        // console.log("next");
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
                                    <ProductSingle productProps={product} key={product._id} />
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
                                    <div className='card-slider-holder-image-container' key={index}>
                                        <div className='card-slider-holder-image-slide' 
                                            style={{backgroundImage: ` url(${item.imageUrl})`}}  >

                                        </div>
                                        <div className='card-slider-holder-image-badge'>
                                            <p>
                                                02/04/2022
                                            </p>
                                        </div>
                                        <div className='card-slider-holder-image-title'>
                                            <p>
                                                {item.title}
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
    }


  return (
    <>
        {
            sliderTypeCard && sliderItems.length > 0 ? 
            sliderCardLayout()
            :
            sliderImageLayout()
        }

    </>

  )
}

export default CardSlider