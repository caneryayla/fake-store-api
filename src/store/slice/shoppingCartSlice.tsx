import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetProductDTO } from "../types/Products.type";

type CartItem = {
  product: GetProductDTO[0];
  quantity: number;
};

type CartState = {
  cartItems: CartItem[];
};

const initialState: CartState = {
  cartItems: [],
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<GetProductDTO[0]>) => {
      const product = action.payload;
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingProductIndex >= 0) {
        state.cartItems[existingProductIndex].quantity += 1;
      } else {
        state.cartItems.push({ product, quantity: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product.id !== action.payload
      );
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.product.id === action.payload
      );
      if (existingProductIndex >= 0) {
        state.cartItems[existingProductIndex].quantity += 1;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.product.id === action.payload
      );
      if (existingProductIndex >= 0) {
        const currentQuantity = state.cartItems[existingProductIndex].quantity;
        if (currentQuantity > 1) {
          state.cartItems[existingProductIndex].quantity -= 1;
        }
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
