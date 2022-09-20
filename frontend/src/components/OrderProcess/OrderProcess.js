import React from 'react'
import { useSelector } from 'react-redux';
import OrderProcessStepOne from './components/OrderProcessStepOne';
import OrderProcessStepTwo from './components/OrderProcessStepTwo';
import OrderStepperFooter from './components/OrderStepperFooter';
import './order-process.scss';

function OrderProces() {

  const {currentStep} = useSelector(state => state.orderProcessStore.orderProcess);

  const orderProcessStepsLayout = () => {
    switch (currentStep) {
      case 1:
         return <OrderProcessStepOne/>
      case 2:
        return  <OrderProcessStepTwo/>

      default:
        return <p>NIJE OKEJ</p>
    }
  }

  return (
    <div className='order-proces-wrapper'>
        OrderProces
        {orderProcessStepsLayout()}
        <OrderStepperFooter/>
    </div>
  )
}

export default OrderProces