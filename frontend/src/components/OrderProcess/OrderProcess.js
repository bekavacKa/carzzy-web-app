import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setShopCart } from '../../redux/shopSlice';

import OrderProcessStepOne from './components/OrderProcessStepOne';
import StripeElements from './components/OrderProcessStepThree';
import OrderProcessStepTwo from './components/OrderProcessStepTwo';
import OrderStepperFooter from './components/OrderStepperFooter';
import routeConfig from '../../config/routeConfig';
import './order-process.scss';

function OrderProces() {

  const {currentStep} = useSelector(state => state.orderProcessStore.orderProcess);
  const [searchParams] = useSearchParams();
  const [paymentMsg, setPaymentMsg] = useState();


  useEffect(() => {
    // console.log(searchParams.get('redirect_status'));
    if(searchParams.get('redirect_status')){
      setPaymentMsg(searchParams.get('redirect_status'))
    }
    // console.log(paymentMsg);
  
  }, [])
  

  const orderProcessStepsLayout = () => {
    if(paymentMsg){
      return <PaymentMessage paymentMsg={paymentMsg} />
    }
    switch (currentStep) {
      case 1:
         return <OrderProcessStepOne/>
      case 2:
        return  <OrderProcessStepTwo/>
      case 3:
        return  <StripeElements/>

      default:
        return <p>NIJE OKEJ</p>
    }
  }

  return (
    <div className='order-proces-wrapper'>
        {orderProcessStepsLayout()}
        {
          !paymentMsg && <OrderStepperFooter/>
        }
        
    </div>
  )
}

function PaymentMessage({paymentMsg}){

  const dispatch = useDispatch();
  const navigate =useNavigate();

  useEffect(() => {
    dispatch(setShopCart([]));
    setTimeout(() => {
      navigate(routeConfig.SHOP.url);
    }, 2000);
  })

  return (
    <div className='payment-message' >
      <h2>{paymentMsg}</h2>
    </div>
  )
}

export default OrderProces