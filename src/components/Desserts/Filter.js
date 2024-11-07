import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getCuisine } from "./dessertSlice";
import Cuisines from "./Cuisines";

export default function Filter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cuisine = useSelector(getCuisine);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="filter-container">
      <h3>Cuisine:</h3>
      <p>{cuisine}</p>
      <button onClick={toggleModal}>
        <img src={"assets/images/icons8-filter-50.png"} alt="filter" />
      </button>

      {isModalOpen && <Cuisines toggleModal={toggleModal} />}
    </div>
  );
}
