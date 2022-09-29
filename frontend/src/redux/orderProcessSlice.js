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
            state.orderProcess.stepTwo.form =  action.payload;
        },
        updateStepTwoIsSubmit: (state, action) => {
            state.orderProcess.stepTwo.isSubmit = true;
        }
    }
});

export const {handleOrderSteps, updateStepTwoForm, updateStepTwoIsSubmit} = orderProcessSlice.actions;

export default orderProcessSlice.reducer;