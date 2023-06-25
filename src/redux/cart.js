import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE={
    cartList: [],
    cartcount:0,
};


const cartSlice = createSlice({
    name: 'cart',
    initialState:INITIAL_STATE,
    reducers: {
        addToCart:(state)=>{
            state.cartcount=1;
        },

        increment:(state)=>{
            state.cartcount+=1
        },
        decrement:(state)=>{
            state.cartcount-=1
        },
       
        // addToCart: (state, action) => {
        //     state.items.push(action.payload);
        // },
        // removeFromCart: (state, action) => {
        //     state.items = state.items.filter(
        //         (item) => item.id !== action.payload.id
        //     );
        // },
    },
})

export const {increment,decrement,addToCart}= cartSlice.actions;

export default cartSlice.reducer;