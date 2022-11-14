import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoader } from '../../redux/loaderSlice';
import AuthService from '../../services/AuthService';
import Slider from '../Slider/Slider';
import './impressions-user.scss';

function ImpressionsUser() {

    const dispatch = useDispatch();
    const [impressions, setImpressions] = useState([]);

    useEffect(() => {
        getAllImpressions();
    },[]);

    // useEffect(() => {
    //     console.log(impressions);
    // }, [impressions]);
    

    const getAllImpressions = () => {
        dispatch(setLoader(true));
        AuthService.getImpressions()
                    .then(res => {
                        if(res.status === 200){
                            setImpressions(res.data);
                        }
                    })
                    .catch(err => console.log(err))
                    .finally(() => dispatch(setLoader(false)))
    }

  return (
    <div className='impressions-user-wrapper' >
        <Slider slides={impressions} impressionsSlider={true} dots={true} speed={5000}  />
    </div>
  )
}

export default ImpressionsUser