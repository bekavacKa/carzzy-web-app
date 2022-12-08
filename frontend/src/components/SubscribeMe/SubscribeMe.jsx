import React, { useState } from 'react';
import { GoMailRead } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { setLoader } from '../../redux/loaderSlice';
import AuthService from '../../services/AuthService';

import './subscribe-me.scss';

function SubscribeMe() {

    // TODO napravit realnu pretplatu i slati potvrdu o pretplati na pravi email poruku

    const dispatch = useDispatch();
    const [subscriptionEmail, setSubscriptionEmail] = useState("");
    const [isSubmited, setIsSubmited] = useState(false);

    const onSubmitForm = (e) => {
        e.preventDefault();
        setIsSubmited(true);
        if(!subscriptionEmail){
            return;
        }
        let subscriptionData={"email": subscriptionEmail}
        subscribeUser(subscriptionData);
        // dispatch(setLoader(true));
        // AuthService.userSubscription(subscriptionData)
        //             .then(res => {
        //                 console.log(res.data);
        //             })
        //             .catch(err => console.log(err))
        //             .finally(() => dispatch(setLoader(false)));


        setIsSubmited(false);
        setSubscriptionEmail("");
    };


    const handleFormOnChange = (e) => {
        setSubscriptionEmail(e.target.value);
    };

    const subscribeUser = (subscriptionData) => {

        dispatch(setLoader(true));
        AuthService.userSubscription(subscriptionData)
                    .then(res => {
                        if(res.status === 200){
                            // console.log(res.data);
                            toast.success("Successful subscription");
                        }
                        if(res.status === 208){
                            // console.log(res.data);
                            toast.info(res.data);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        toast.info("Something is wrong, try again later");
                    })
                    .finally(() => dispatch(setLoader(false)));
    }

  return (
    <div className='subscribe-me-wrapper'>
        <div className='subscribe-me-icon'>
            <GoMailRead />
        </div>
        <div className='subscribe-me-info'>
            <h3>
                Sign up now to recive emails for <br/>
                exclusive offers
            </h3>
            <p>
                Sign up to recive the latest offers and discounts from Carzzy Auto Parts
            </p>
        </div>
        <form className='subscribe-me-email' onSubmit={e => onSubmitForm(e)}>
            <input className={`subscribe-me-email-input ${!subscriptionEmail && isSubmited && 'required animate__animated animate__shakeX'} `} id="email" type ="email" name="email" placeholder='Your email address' onInput={e => handleFormOnChange(e) } value={subscriptionEmail}  />
            <button type='submit' className='subscribe-me-btn'>
                Sign Up
            </button>
        </form>

        <ToastContainer theme="dark" />
    </div>
  )
}

export default SubscribeMe