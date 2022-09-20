import {createSlice} from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: 'shopCart',
    initialState: {
        shopCart: []
    },
    reducers: {
        addToShopCart: (state, action) => {
            // console.log("payload shop cart => ", action.payload);
            // let currentProductId = action.payload._id;
            let newItem = Object.assign({}, action.payload);
            let foundItemIndex;
            let foundItem = state.shopCart.find((item, index) => {
                if (item._id === newItem._id) {
                    foundItemIndex = index;
                    return item;
                }
                // else{
                //     return 0;
                // }
            });

            if (foundItem) {
                state.shopCart[foundItemIndex].count = state.shopCart[foundItemIndex].count + 1;
                state.shopCart[foundItemIndex].totalPrice = state.shopCart[foundItemIndex].count * state.shopCart[foundItemIndex].price
            } else {
                newItem.count = 1;
                newItem.totalPrice = newItem.price;
                state.shopCart.push(newItem);
            }
        },
        deleteFromShopCart: (state, action ) =>{
            state.shopCart.splice(action.payload, 1);
        },
        handleItemCountShopCart: (state, action) => {
            state.shopCart[action.payload.index].count = action.payload.isIncrement ? state.shopCart[action.payload.index].count + 1 : state.shopCart[action.payload.index].count - 1;
        },
        setShopCart: (state, action) => {
            state.shopCart = action.payload;
        }
    }
});


export const {addToShopCart, deleteFromShopCart, handleItemCountShopCart, setShopCart} =shopSlice.actions;
export default shopSlice.reducer;