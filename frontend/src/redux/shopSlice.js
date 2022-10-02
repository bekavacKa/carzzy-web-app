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
            let shopCartCopy = [...state.shopCart];
            shopCartCopy.splice(action.payload, 1);
            state.shopCart = shopCartCopy;
            localStorage.setItem('shopCart', JSON.stringify(shopCartCopy));
        },
        handleItemCountShopCart: (state, action) => {
            let product = state.shopCart[action.payload.index];
            // console.log("product stateee => ", product);
            let count = action.payload.isIncrement ? product.count + 1 : product.count - 1;
            // console.log("count state => ", count);
            state.shopCart[action.payload.index].count = count < 1 ? 1 : count;
            state.shopCart[action.payload.index].totalPrice = product.count * product.price;
        },
        setShopCart: (state, action) => {
            state.shopCart = action.payload;
        }
    }
});


export const {addToShopCart, deleteFromShopCart, handleItemCountShopCart, setShopCart} =shopSlice.actions;
export default shopSlice.reducer;