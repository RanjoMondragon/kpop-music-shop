import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers:{
        addProduct:(state,action) => {
            console.log('Adding product:', action.payload.product);
            const product = {
                ...action.payload.product,
                quantity: action.payload.quantity
            };
            state.quantity += 1;
            state.products.push(product);
            state.total += product.price * product.quantity;
            // state.quantity += 1;
            // state.products.push(action.payload.product);
            // state.total += action.payload.price * action.payload.quantity;
        },
    },
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;