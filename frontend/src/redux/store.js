import { configureStore } from '@reduxjs/toolkit';
import orderProcessSlice from './orderProcessSlice';
import shopSlice from './shopSlice';
import userSlice from './userSlice';

export default configureStore({
    reducer:{
        userStore: userSlice,
        shopCartStore: shopSlice,
        orderProcessStore: orderProcessSlice,
    }
})