import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemQuantity from '../Cart/ItemQuantity';
import { addToCart } from '../Cart/cartSlice';

export default function Dessert( {dessert} ) {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
const totalPrice = dessert.price * quantity;

dispatch(addToCart({dessert, quantity, totalPrice}))
  }

  return (
    <div className='dessert-container'>
      <img src={dessert.image.desktop} alt={dessert.name} />
      <button onClick={handleAddToCart} >Add to Cart</button>
      <ItemQuantity quantity={quantity} setQuantity={setQuantity}/>
      <div className='dessert-box'>
      <p>{dessert.category}</p>
      <h3>{dessert.name}</h3>
      <p>{dessert.price}</p>
      </div>
    </div>
  )
}
