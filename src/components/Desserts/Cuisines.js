import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCuisine, getCuisine } from "./dessertSlice";

export default function Cuisines({ toggleModal }) {
  const dispatch = useDispatch();

  const handleCuisineChoice = (event) => {
    dispatch(filterCuisine(event.target.value));
  };

  const cuisine = useSelector(getCuisine);

  return (
    <div className="modal-backdrop">
      <div className="cuisine-modal--container">
        <h2>Choose your favourite cuisine:</h2>
        <form>
          <label>
            <input
              type="radio"
              name="cuisine"
              value="All"
              checked={cuisine === "All"}
              onChange={(e) => handleCuisineChoice(e)}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="cuisine"
              value="Belgian"
              checked={cuisine === "Belgian"}
              onChange={(e) => handleCuisineChoice(e)}
            />
            Belgian
          </label>
          <label>
            <input
              type="radio"
              name="cuisine"
              value="French"
              checked={cuisine === "French"}
              onChange={(e) => handleCuisineChoice(e)}
            />
            French
          </label>
          <label>
            <input
              type="radio"
              name="cuisine"
              value="Italian"
              checked={cuisine === "Italian"}
              onChange={(e) => handleCuisineChoice(e)}
            />
            Italian
          </label>
          <label>
            <input
              type="radio"
              name="cuisine"
              value="Middle Eastern"
              checked={cuisine === "Middle Eastern"}
              onChange={(e) => handleCuisineChoice(e)}
            />
            Middle Easter
          </label>
          <label>
            <input
              type="radio"
              name="cuisine"
              value="American"
              checked={cuisine === "American"}
              onChange={(e) => handleCuisineChoice(e)}
            />
            American
          </label>
          <label>
            <input
              type="radio"
              name="cuisine"
              value="Japanese"
              checked={cuisine === "Japanese"}
              onChange={(e) => handleCuisineChoice(e)}
            />
            Japanese
          </label>
          <label>
            <input
              type="radio"
              name="cuisine"
              value="Chinese"
              checked={cuisine === "Chinese"}
              onChange={(e) => handleCuisineChoice(e)}
            />
            Chinese
          </label>
          <label>
            <input
              type="radio"
              name="cuisine"
              value="Austrian"
              checked={cuisine === "Austrian"}
              onChange={(e) => handleCuisineChoice(e)}
            />
            Austrian
          </label>
          <label>
            <input
              type="radio"
              name="cuisine"
              value="German"
              checked={cuisine === "German"}
              onChange={(e) => handleCuisineChoice(e)}
            />
            German
          </label>
          <label>
            <input
              type="radio"
              name="cuisine"
              value="Mexican"
              checked={cuisine === "Mexican"}
              onChange={(e) => handleCuisineChoice(e)}
            />
            Mexican
          </label>
          <label>
            <input
              type="radio"
              name="cuisine"
              value="Indian"
              checked={cuisine === "Indian"}
              onChange={(e) => handleCuisineChoice(e)}
            />
            Indian
          </label>
          <label>
            <input
              type="radio"
              name="cuisine"
              value="Spanish"
              checked={cuisine === "Spanish"}
              onChange={(e) => handleCuisineChoice(e)}
            />
            Spanish
          </label>
        </form>
        <button className="item-remove--btn" onClick={toggleModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              fill="#87635a"
              d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
