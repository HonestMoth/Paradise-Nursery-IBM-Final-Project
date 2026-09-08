import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  numOfItems: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      state.numOfItems += 1;
    },

    removeItem: (state, action) => {
      const item = state.items.find(
        (item) => item.name === action.payload.name
      );

      if (item) {
        state.numOfItems -= item.quantity;
      }

      state.items = state.items.filter(
        (item) => item.name !== action.payload.name
      );
    },

    updateQuantity: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.name === action.payload.name
      );

      if (index !== -1) {
        const oldQuantity = state.items[index].quantity;
        const newQuantity = action.payload.quantity;

        state.items[index].quantity = newQuantity;

        state.numOfItems += newQuantity - oldQuantity;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;