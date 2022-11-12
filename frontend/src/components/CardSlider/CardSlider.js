import React, { useEffect, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import ProductSingle from '../ProductSingle/ProductSingle';
import './card-slider.scss';

function CardSlider({sliderTitle, cardSliderItems, sliderTypeCard, sliderArrow}) {

    // const dispatch = useDispatch();

    // const sliderHolder = useRef();
    // TODO POPRAVIT BUG NA STRELICAMA !!!!!!!!!!
    const [sliderItems, setSliderItems] = useState([]);

    useEffect(() => {
        if(cardSliderItems){
            setSliderItems(cardSliderItems)
        }
    },[cardSliderItems]);
    
    // useEffect(() => {
    //     console.log(sliderItems);
    // },[sliderItems]);

    const goPrev = () => {
        console.log("prev");
        let slider = document.querySelector('.card-slider-holder');
        slider.scrollLeft = slider.scrollLeft - 500;
        console.log(slider.scrollLeft);
    };

    const goNext = () => {
        console.log("next");
        let slider = document.querySelector('.card-slider-holder');
        slider.scrollLeft = slider.scrollLeft + 500;
        console.log(slider.scrollLeft);
    };

    const sliderCardLayout = () => {
        return (
            sliderItems.length > 0 &&
                <div className='card-slider-wrapper'>
                    
                    <div className='card-slider-header' >
                        {
                            sliderTitle &&
                            <h2 className='card-slider-header-title'>
                                {sliderTitle}
                            </h2>
                        }
                        {
                            sliderArrow &&
                            <div className='card-slider-header-btns'>
                                <FaAngleLeft className='arrow' onClick={goPrev} />
                                <FaAngleRight className='arrow' onClick={goNext} />
                            </div>
                        }
                    </div>

                    <div className='card-slider-holder' >
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
                        <h2 className='card-slider-header-title'>
                            {sliderTitle}
                        </h2>
                    }
                    {
                        sliderArrow &&
                        <div className='card-slider-header-btns'>
                            <FaAngleLeft className='arrow' onClick={goPrev} />
                            <FaAngleRight className='arrow' onClick={goNext} />
                        </div>
                    }
                </div>

                <div className='card-slider-holder-image' >

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