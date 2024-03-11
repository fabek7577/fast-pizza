import { createSlice } from "@reduxjs/toolkit";
import { action } from "../order/CreateOrder";

const initialState = {
  cart: [
    {
      pizzaId: 7,
      name: "Napoli",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteItem: (state, { payload }) => {
      state.cart = state.cart.filter((pizza) => pizza.pizzaId !== payload);
    },
    addItem: (state, { payload }) => {
      state.cart = [...state.cart, payload];
    },
    clearItem: (state, { payload }) => {
      state.cart = [];
    },
    increeseCartQuantity: (state, { payload }) => {
      const item = state.cart.find((item) => {
        return item.pizzaId == payload;
      });
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreeseCartQuantity: (state, action) => {
      const item = state.cart.find((item) => {
        return item.pizzaId == action.payload;
      });
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      // if 0 delete element from cart
      if (item.quantity < 1) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
  },
});

export const {
  addItem,
  deleteItem,
  clearItem,
  decreeseCartQuantity,
  increeseCartQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export function getTotalCartPQty(state) {
  return state.cart.cart.reduce(
    (prev, current) => (prev += current.quantity),
    0
  );
}
export function getTotalCartPrice(state) {
  return state.cart.cart.reduce(
    (prev, current) => prev + current.totalPrice,
    0
  );
}
export const findCartById = (state) => (id) => {
  return state.cart.cart.find((item) => item.pizzaId == id);
  // finding cart
};

export const getCurrentItemQuantity = (id) => (state) => {
  return state.cart.cart.find((item) => item.pizzaId == id)?.quantity || 0;
};
