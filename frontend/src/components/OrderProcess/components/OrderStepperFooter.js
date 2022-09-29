import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleOrderSteps, updateStepTwoIsSubmit } from '../../../redux/orderProcessSlice';
import {FaLongArrowAltRight, FaLongArrowAltLeft} from "react-icons/fa";
import {toast, ToastContainer} from "react-toastify";

import '../scss/order-stepper-footer.scss';

function OrderStepperFooter() {

    const {user} = useSelector(state => state.userStore);
    const {currentStep} = useSelector(state => state.orderProcessStore.orderProcess);
    const { isSubmit } = useSelector((state) => state.orderProcessStore.orderProcess.stepTwo);
    const {shopCart} = useSelector(state => state.shopCartStore );
    const dispatch = useDispatch();

    useEffect(()=>{
        // console.log(currentStep);
        // console.log(shopCart);
        // console.log(user, "hjasdjajsd");
    },[currentStep])

    
    const handleNext = () => {
        if(currentStep === 1){
            validateStepOne();
        }
        if(currentStep === 2){
            dispatch(updateStepTwoIsSubmit());
        }
        return
    }

    const handleBack = () => {
        dispatch(handleOrderSteps(currentStep - 1));
    }

    const validateStepOne = () => {
        if(!shopCart.length) {
            toast.error('Shop cart is empty!!');
            return;
        }
        if(!user.hasOwnProperty('username')) {
            toast.info('Please log in to continue!!');
            return;
        }
        dispatch(handleOrderSteps(currentStep + 1));
    }

  return (

    <>
    <div className={`order-stepper-footer-wrapper ${currentStep > 1 ? 'space-gap' : 'to-end' }`}>
        {
            currentStep > 1 && <button className='btn-steper-footer' onClick={() => handleBack(-1)} > <FaLongArrowAltLeft className='stepper-arrow'/> Back</button>
        }
        <button className='btn-steper-footer' onClick={() => handleNext()} >Next <FaLongArrowAltRight className='stepper-arrow' /> </button>
    </div>
    <ToastContainer/>
    </>
  )
}

export default OrderStepperFooter