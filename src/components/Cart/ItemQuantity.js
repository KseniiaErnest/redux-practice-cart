import React from 'react'

export default function ItemQuantity( {quantity, setQuantity} ) {

  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  }

  const removeQuantity = () => {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  }

  return (
    <div className='item-quantity--container'>
      <button onClick={addQuantity}>+</button>
      <p>{quantity}</p>
      <button onClick={removeQuantity}>-</button>
    </div>
  )
}
