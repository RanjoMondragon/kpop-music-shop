import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
      products: [],
    },
    reducers: {
      addProductToWishlist: (state, action) => {
        state.products.push(action.payload);
      },
      
      removeProductFromWishlist: (state, action) => {
        const { productId } = action.payload;
        state.products = state.products.filter((p) => p._id !== productId);
      },
      resetWishlist: (state) => {
        state.products = [];
      },
    },
  });

export const { addProductToWishlist, updateWishlistQuantity, removeProductFromWishlist, resetWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
