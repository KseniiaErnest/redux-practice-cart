import React from 'react';
import data from '../../data.json'
import Dessert from './Dessert';

export default function Desserts() {
  return (
    <div className='desserts-container'>
      <h1>Desserts</h1>
      <ul className='desserts-list'>
        {data.map((dessert) => (
          <Dessert dessert={dessert} />
        ))}
      </ul>

    </div>
  )
}
