import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {loadStripe} from '@stripe/stripe-js';
import {Elements, PaymentElement, useElements, useStripe} from '@stripe/react-stripe-js';
import { setLoader } from '../../../redux/loaderSlice';
import '../scss/order-process-step-three.scss';
import PaymentService from '../../../services/PaymentService';

const stripePromise = loadStripe('pk_test_51LnTnCBfCyeFqsH5PGxYfX7RBFG3FA8FKR7Neo2Nyjq4B1jN7p2Ho5o68uNjGJqTaqJpesg9OgXHkGEb6oQVgHaT00fEmKn8HH')


function OrderProcessStepThree(secretKey) {
    const stripe = useStripe();
    const elements = useElements();


    const submitPayment = async () => {
        // console.log("daa 1");
        if(!stripe || !elements || !secretKey){
            return
        }
        // console.log("daa 2");
        const paymentResponse = await stripe.confirmPayment({
            elements,
            confirmParams: {
            return_url: "http://localhost:3000/order",
            },
        });

    //   console.log(paymentResponse);
    }

  return (
    <div className='order-process-step-three-wrapper' >
        {
            secretKey &&
            <div>
                <h2>Step 3</h2> 
                <PaymentElement />
                <button className='btn-step-three' onClick={e => submitPayment()}>
                    submit
                </button>
            </div>
        }
    </div>
  )

  
}
function StripeElements(){

    
    const [secretKey, setSecretKey] = useState('');
    const {shopCart} = useSelector(state => state.shopCartStore);
    const dispatch = useDispatch();
    const options = {
        clientSecret: secretKey
    };
    
    useEffect(() => {
        dispatch(setLoader(true));
    },[])

  useEffect(()=> {
    //   console.log("shopCart from step 3 => ", shopCart);
    let sumPrice = shopCart.reduce((sum, item) => {
        // console.log(sum);
        // console.log('iiiiteem',item);
        return sum + item.totalPrice
    }, 0);

    // console.log(sumPrice);


      PaymentService.initPayment({amount: sumPrice})
                  .then(res => {
                      // console.log(res.data);
                      setSecretKey(res.data);
                  })
                  .catch(err => {
                      console.log(err);
                  })
                  .finally(() => dispatch(setLoader(false)) )
  },[]);

  return(
      <>
      { secretKey &&
          <Elements stripe={stripePromise} options={options}>
              <OrderProcessStepThree secretKey={secretKey} />
          </Elements>
          
      }
      </>
  )
}

export default StripeElements;