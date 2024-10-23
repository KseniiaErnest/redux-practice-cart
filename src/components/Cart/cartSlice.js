import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
cartItems: [],
  },
  reducers: {
addToCart(state, action) {
  // Check if the item already in the cart
  const alreadyInTheCart = state.cartItems.find((item) => item.dessertId === action.payload.dessert.id);

  // If it is already in the cart, just increase quantity + total price
  if (alreadyInTheCart) {
    alreadyInTheCart.quantity += action.payload.quantity;
    alreadyInTheCart.totalPrice += action.payload.quantity * action.payload.dessert.price;
  } else {
    const uniqeId = new Date().getTime();
    state.cartItems.push({
      id: uniqeId,
      dessertId: action.payload.dessert.id,
      desserName: action.payload.dessert.name,
      dessertPrice: action.payload.dessert.price,
      quantity: action.payload.quantity,
      totalPrice: action.payload.totalPrice,
    })
  }
}
  }

})

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
export const cartItemsSlice = state => state.cart.cartItems;