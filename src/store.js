import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./components/Cart/cartSlice";
import dessertSlice from "./components/Desserts/dessertSlice";

export const store = configureStore({
  reducer :{
cart: cartSlice,
dessert: dessertSlice
  }
})
