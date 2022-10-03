import { configureStore } from '@reduxjs/toolkit';
import loaderSlice from './loaderSlice';
import orderProcessSlice from './orderProcessSlice';
import shopSlice from './shopSlice';
import userSlice from './userSlice';

export default configureStore({
    reducer:{
        userStore: userSlice,
        shopCartStore: shopSlice,
        orderProcessStore: orderProcessSlice,
        loaderStore: loaderSlice,
    }
})