import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoader } from '../../redux/loaderSlice';
import ShopService from '../../services/ShopService';
import CardSlider from '../CardSlider/CardSlider';
import './sponsors-slider.scss';

function SponsorsSlider() {

    const dispatch = useDispatch();
    const[sponsors, setSponsors] = useState([]);

    useEffect(() => {
        getAllSponsors();
    }, []);
    
    // useEffect(() => {
    //     console.log(sponsors);
    // }, [sponsors])

    const getAllSponsors = () => {
        dispatch(setLoader(true));
        ShopService.getSponsors()
                    .then(res => {
                        if(res.status === 200){
                            setSponsors(res.data)
                        }
                    })
                    .catch(err => console.log(err))
                    .finally(() => dispatch(setLoader(false)));
    }

  return (
    <>
        {
            sponsors && sponsors.length > 0 ?
            <div className='sponsors-slider-wrapper'>
                <CardSlider sliderArrow={true} cardSliderItems={sponsors} sliderTypeSponsor={true} />
            </div>
            :
            null
        }
    </>
  )
}

export default SponsorsSlider