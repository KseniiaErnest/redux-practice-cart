import React, { useEffect, useState } from 'react';
import data from '../../data.json'
import Dessert from './Dessert';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import { getCuisine } from './dessertSlice';

export default function Desserts() {
  const [currentPage, setCurrentPage] = useState(1);
  const dessertsPerPage = 9;


  const cuisine = useSelector(getCuisine);

  const filteredData = data.filter((dessert) => {
    if (cuisine === 'All') return true;
    return cuisine === dessert.cuisine;
  });

  const totalPages = Math.ceil(filteredData.length / dessertsPerPage);
  const startIndex = (currentPage - 1) * dessertsPerPage;
  const endIndex = startIndex + dessertsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handleNextPage = () => {
if (currentPage >= totalPages) return;
setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
if (currentPage <= 1) return;
setCurrentPage(currentPage - 1);
  }

 

  return (
    <div className='desserts-container'>
    <div className='desserts-container--head'>
    <h1>Desserts</h1>
    <Filter />
    </div>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
      <button onClick={(handleNextPage)} disabled={currentPage === totalPages}>Next</button>
      <ul className='desserts-list'>
        {paginatedData.map((dessert) => (
          <Dessert key={dessert.id} dessert={dessert} />
        ))}
      </ul>

    </div>
  )
}
