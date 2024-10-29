import React from 'react';
import data from '../../data.json'
import Dessert from './Dessert';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import { getCuisine } from './dessertSlice';

export default function Desserts() {

  const cuisine = useSelector(getCuisine);

  const filteredData = data.filter((dessert) => {
    if (cuisine === 'All') return true;
    return cuisine === dessert.cuisine;
  });

  return (
    <div className='desserts-container'>
    <div className='desserts-container--head'>
    <h1>Desserts</h1>
    <Filter />
    </div>
      
      <ul className='desserts-list'>
        {filteredData.map((dessert) => (
          <Dessert key={dessert.id} dessert={dessert} />
        ))}
      </ul>

    </div>
  )
}
