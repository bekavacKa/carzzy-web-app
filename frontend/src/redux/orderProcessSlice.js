import {createSlice} from '@reduxjs/toolkit';

const orderProcessSlice = createSlice({
    name: 'orderProcess',
    initialState: {
        orderProcess: {
            currentStep: 1,
            stepOne: {
                isSubmit: false
            },
            stepTwo: {
                isSubmit: false,
                isValid: false,
                form: {
                    email : '',
                    firstName : '',
                    lastName : '',
                    address : '',
                    city : '',
                    postCode : '',
                    phoneNumber : '',
                    terms : false,
                    conditions : false
                }
            },
            stepThree: {

            }
        },
    },
    reducers: {
        handleOrderSteps: (state, action) => {
            state.orderProcess.currentStep = action.payload;
        },
        updateStepTwoForm: (state, action) => {
            // console.log("payload 2 => ", action);
            let payloadStepTwo = action.payload;

            // console.log(Object.keys(payloadStepTwo));
            // console.log(Object.values(payloadStepTwo));
            // console.log(Object.values(payloadStepTwo).some(item => !item));

            state.orderProcess.stepTwo.isValid = !Object.values(payloadStepTwo).some(item => !item);

            state.orderProcess.stepTwo.form =  action.payload;
        },
        updateStepTwoIsSubmit: (state, action) => {
            state.orderProcess.stepTwo.isSubmit = true;
        }
    }
});

export const {handleOrderSteps, updateStepTwoForm, updateStepTwoIsSubmit} = orderProcessSlice.actions;

export default orderProcessSlice.reducer;