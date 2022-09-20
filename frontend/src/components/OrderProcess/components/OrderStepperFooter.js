import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleOrderSteps } from '../../../redux/orderProcessSlice';
import '../scss/order-stepper-footer.scss';

function OrderStepperFooter() {

    const {currentStep} = useSelector(state => state.orderProcessStore.orderProcess);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log(currentStep);
    },[currentStep])

    const handleCurrentState = (num) => {
        dispatch(handleOrderSteps(currentStep + num))
    }

  return (
    <div className='order-stepper-footer-wrapper'>
        {
            currentStep > 1 && <button onClick={() => handleCurrentState(-1)} >Back</button>
        }
        <button onClick={() => handleCurrentState(1)} >Next</button>
    </div>
  )
}

export default OrderStepperFooter