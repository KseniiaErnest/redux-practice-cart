import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsSlice, removeFromCart } from "./cartSlice";

export default function Cart() {
  const cartItems = useSelector(cartItemsSlice);
  const totalPriceAll = cartItems.reduce(
    (acc, item) => acc + item.totalPrice,
    0
  );
  console.log(cartItems);

  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2>Your Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            fill="none"
            viewBox="0 0 128 128"
          >
            <path
              fill="#260F08"
              d="M8.436 110.406c0 1.061 4.636 2.079 12.887 2.829 8.252.75 19.444 1.171 31.113 1.171 11.67 0 22.861-.421 31.113-1.171 8.251-.75 12.887-1.768 12.887-2.829 0-1.061-4.636-2.078-12.887-2.828-8.252-.75-19.443-1.172-31.113-1.172-11.67 0-22.861.422-31.113 1.172-8.251.75-12.887 1.767-12.887 2.828Z"
              opacity=".15"
            />
            <path
              fill="#87635A"
              d="m119.983 24.22-47.147 5.76 4.32 35.36 44.773-5.467a2.377 2.377 0 0 0 2.017-1.734c.083-.304.104-.62.063-.933l-4.026-32.986Z"
            />
            <path
              fill="#AD8A85"
              d="m74.561 44.142 47.147-5.754 1.435 11.778-47.142 5.758-1.44-11.782Z"
            />
            <path
              fill="#CAAFA7"
              d="M85.636 36.78a2.4 2.4 0 0 0-2.667-2.054 2.375 2.375 0 0 0-2.053 2.667l.293 2.347a3.574 3.574 0 0 1-7.066.88l-1.307-10.667 14.48-16.88c19.253-.693 34.133 3.6 35.013 10.8l1.28 10.533a1.172 1.172 0 0 1-1.333 1.307 4.696 4.696 0 0 1-3.787-4.08 2.378 2.378 0 1 0-4.72.587l.294 2.346a2.389 2.389 0 0 1-.484 1.755 2.387 2.387 0 0 1-1.583.899 2.383 2.383 0 0 1-1.755-.484 2.378 2.378 0 0 1-.898-1.583 2.371 2.371 0 0 0-1.716-2.008 2.374 2.374 0 0 0-2.511.817 2.374 2.374 0 0 0-.493 1.751l.293 2.373a4.753 4.753 0 0 1-7.652 4.317 4.755 4.755 0 0 1-1.788-3.17l-.427-3.547a2.346 2.346 0 0 0-2.666-2.053 2.4 2.4 0 0 0-2.08 2.667l.16 1.173a2.378 2.378 0 1 1-4.72.587l-.107-1.28Z"
            />
            <path
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".974"
              d="m81.076 28.966 34.187-4.16"
            />
            <path
              fill="#87635A"
              d="M7.45 51.793c-.96 8.48 16.746 17.44 39.466 19.947 22.72 2.506 42.08-2.16 43.04-10.667l-3.947 35.493c-.96 8.48-20.24 13.334-43.04 10.667S2.463 95.74 3.423 87.18l4.026-35.387Z"
            />
            <path
              fill="#AD8A85"
              d="M5.823 65.953c-.96 8.453 16.746 17.44 39.573 20.027 22.827 2.586 42.053-2.187 43.013-10.667L87.076 87.1c-.96 8.48-20.24 13.333-43.04 10.666C21.236 95.1 3.53 86.22 4.49 77.74l1.334-11.787Z"
            />
            <path
              fill="#CAAFA7"
              d="M60.836 42.78a119.963 119.963 0 0 0-10.347-1.627c-24-2.667-44.453 1.893-45.333 10.373l-2.133 18.88a3.556 3.556 0 1 0 7.066.8 3.574 3.574 0 1 1 7.094.8l-.8 7.094a5.93 5.93 0 1 0 11.786 1.333 3.556 3.556 0 0 1 7.067.8l-.267 2.347a3.573 3.573 0 0 0 7.094.826l.133-1.2a5.932 5.932 0 1 1 11.787 1.36l-.4 3.52a3.573 3.573 0 0 0 7.093.827l.933-8.267a1.174 1.174 0 0 1 1.307-.906 1.146 1.146 0 0 1 1.04 1.306 5.947 5.947 0 0 0 11.813 1.334l.534-4.72a3.556 3.556 0 0 1 7.066.8 3.573 3.573 0 0 0 7.094.826l1.786-15.546a2.373 2.373 0 0 0-2.08-2.667L44.143 55.74l16.693-12.96Z"
            />
            <path
              fill="#87635A"
              d="m59.156 57.66 1.68-14.88-16.827 13.173 15.147 1.707Z"
            />
            <path
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".974"
              d="M9.796 52.06c-.667 5.866 16.24 12.586 37.733 15.04 14.774 1.68 27.867.906 34.854-1.654"
            />
          </svg>
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <div className="test">
          {cartItems.map((item) => (
            <div className="cart-item--box border-bottom " key={item.id}>
              <div >
                <h5>{item.desserName}</h5>
                <p >
                  <span className="cart-item--qt">{item.quantity}x</span> <span className="cart-item--price">@ ${item.dessertPrice}</span> <span className="cart-item--priceTotal">${item.totalPrice}</span>
                </p>
              </div>
              <button onClick={() => dispatch(removeFromCart({dessertToRemove: { id: item.dessertId}}))} className="item-remove--btn btn--clicked"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#87635a" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg></button>
            </div>
          ))}

          <div className="cart-item--box">
            <p>Order Total</p>
            <h1>${totalPriceAll}</h1>
          </div>
        </div>
      )}
      
    </div>

    
  );
}

