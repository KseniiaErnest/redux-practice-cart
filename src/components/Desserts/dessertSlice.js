import { createSlice } from "@reduxjs/toolkit";

const dessertSlice = createSlice({
  name: 'dessert',
  initialState: {
    cuisine: 'All'
  },
  reducers: {
filterCuisine(state, action) {
  state.cuisine = action.payload;
}
  }
})



export default dessertSlice.reducer;
export const getCuisine = state => state.dessert.cuisine;
export const { filterCuisine } = dessertSlice.actions;