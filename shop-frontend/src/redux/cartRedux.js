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
        },
        updateQuantity: (state, action) => {
            const { productId, type } = action.payload;
            const product = state.products.find((p) => p._id === productId);
            if (product) {
              if (type === 'asc') {
                state.total += product.price;
                product.quantity += 1;
              } else if (type === 'dec' && product.quantity > 1) {
                state.total -= product.price;
                product.quantity -= 1;
              }
            }
        },
        removeProduct: (state, action) => {
            const { productId } = action.payload;
            const product = state.products.find((p) => p._id === productId);
            if (product) {
              state.products = state.products.filter((p) => p._id !== productId);
              state.quantity -= 1;
              state.total -= product.price * product.quantity;
            }
        },
    },
});

export const {addProduct, updateQuantity, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;