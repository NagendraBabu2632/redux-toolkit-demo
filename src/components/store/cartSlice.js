import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      // Directly mutate the state to remove the item
      return state.filter(item => item.id !== action.payload);
    }
  }
});

// Action creators
export const { add, remove } = cartSlice.actions;

// Reducer
export default cartSlice.reducer;