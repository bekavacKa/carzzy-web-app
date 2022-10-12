import React, { useEffect } from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './rating-stars.scss';

function RatingStars({rating}) {

    const numStars = [1,1,1,1,1];

    useEffect(() => {
        // console.log(rating);
    },[rating]);


    const starsLayout = () => {
        return (
            <div className='stars'>
                {
                    numStars.map((el, index) => {
                        <div>
                            
                        </div>
                        if(rating > index){
                            if (rating > index + 0.5){
                                return <FaStar className='star' key={index} />
                            }
                            return <FaStarHalfAlt className='star' key={index} />
                        }
                        else
                        return <FaRegStar className='star' key={index} />
                    })
                }
            </div>

        )
    }

  return (
    <div className='rating-stars-wrapper'>
        { rating && starsLayout()}
    </div>
  )
}

export default RatingStars