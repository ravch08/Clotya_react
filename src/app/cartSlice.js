import { createSlice } from "@reduxjs/toolkit";
import { productItems } from "../components/layout/Data";

const initialState = {
  carts: [],
  totalPrice: 0,
  totalQuantity: 0,
  items: productItems,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const el = state.carts.findIndex(item => item.id === action.payload.id);
      if (el >= 0) {
        state.carts[el].quantity += 1;
      } else {
        state.carts.push(action.payload);
      }
    },
    getCartTotal: (state) => {
      let totalPrice = 0;
      let totalQuantity = 0;

      state.carts.forEach((cartItem) => {
        const { price, quantity } = cartItem;
        const itemTotal = price * quantity;
        totalPrice += itemTotal;
        totalQuantity += quantity;
      });

      state.totalPrice = parseFloat(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    deleteProduct: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      state.carts = state.carts.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decrementQuantity: (state, action) => {
      state.carts = state.carts.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  }
})

export const { addToCart, getCartTotal, deleteProduct, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;