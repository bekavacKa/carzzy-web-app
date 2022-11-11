import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { setLoader } from '../../redux/loaderSlice';
import ShopService from '../../services/ShopService';
import ProductSingle from '../ProductSingle/ProductSingle';
import './card-slider.scss';

function CardSlider({sliderTitle, numProducts, myId}) {

    const dispatch = useDispatch();
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        getProducts()
    },[])

    const getProducts = () => {
        dispatch(setLoader(true));
        ShopService.getRandomProducts(numProducts)
                    .then(res => {
                        if(res.status === 200){
                            console.log(res.data);
                            setRandomProducts(res.data)
                        }
                    })
                    .catch(err => console.log(err))
                    .finally(() => dispatch(setLoader(false)))
    };

    const goPrev = () => {
        console.log("prev");
        let slider = document.querySelector('.card-slider-holder');
        slider.scrollLeft = slider.scrollLeft - 500;
        console.log(slider.scrollLeft);
        console.log(slider);
    };

    const goNext = () => {
        console.log("next");
        let slider = document.querySelector('.card-slider-holder');
        slider.scrollLeft = slider.scrollLeft + 500;
        console.log(slider.scrollLeft);
        console.log(slider);
    };


  return (
    <div className='card-slider-wrapper'>
        
        <div className='card-slider-header' >
            <h2 className='card-slider-header-title'>
                {sliderTitle}
            </h2>
            <div className='card-slider-header-btns'>
                <FaAngleLeft className='arrow' onClick={goPrev} />
                <FaAngleRight className='arrow' onClick={goNext} />
            </div>
            
        </div>

        <div className={`card-slider-holder ${myId}`}  >
            {
                randomProducts && numProducts && 
                randomProducts.map(product => {
                    return(
                        <ProductSingle productProps={product} key={product._id} />
                    )
                })
            }
        </div>

    </div>
  )
}

export default CardSlider