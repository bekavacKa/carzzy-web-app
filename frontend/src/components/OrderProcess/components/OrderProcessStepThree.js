import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {loadStripe} from '@stripe/stripe-js';
import {Elements, PaymentElement} from '@stripe/react-stripe-js';

import '../scss/order-process-step-three.scss';
import PaymentService from '../../../services/PaymentService';

const stripePromise = loadStripe('pk_test_51LnTnCBfCyeFqsH5PGxYfX7RBFG3FA8FKR7Neo2Nyjq4B1jN7p2Ho5o68uNjGJqTaqJpesg9OgXHkGEb6oQVgHaT00fEmKn8HH')


function OrderProcessStepThree() {

    const {shopCart} = useSelector(state => state.shopCartStore);
    const [secretKey, setSecretKey] = useState('')
    // const dispatch = useDispatch();

    useEffect(()=> {
        console.log("shopCart from step 3 => ", shopCart);
        PaymentService.initPayment({amount: 4000})
                    .then(res => {
                        // console.log(res.data);
                        setSecretKey(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    })
    },[]);

    const options = {
        clientSecret: secretKey
    }

  return (
    <div className='order-process-step-three-wrapper' >
        {
            secretKey &&
            <Elements stripe={stripePromise} options={options}>
                <h2>Step 3</h2> 
                <PaymentElement />
            </Elements>
        }
    </div>
  )
}

export default OrderProcessStepThree