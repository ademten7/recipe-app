import React from "react";
import "./Recipes.scss";

const Recipes = ({
  title,
  calories,
  image,
  cuisineType,
  ingredientLines,
  dietLabels,
  dishType,
  healthLabels,
  mealType,
}) => {
  return (
    <div>
      <div className="title">
        <h1>{title}</h1>

        <img src={image} width="200" alt="" />
      </div>
      <div className="descriptions">
        <p className="sub-heads">
          Cuisine Type:{" "}
          <span className="cuisine-type">
            {cuisineType
              .substring(0, 1)
              .toUpperCase()
              .concat(cuisineType.substring(1).toLowerCase())}
          </span>
        </p>
        <p className="sub-heads">
          Calories: <span className="cal">{calories.toFixed(0)}</span>
        </p>
        <p className="sub-heads"> Diet Labels</p>
        <ul>
          {" "}
          {dietLabels.length > 0
            ? dietLabels.map((dietLabel) => {
                return <li>{dietLabel}</li>;
              })
            : "No information found"}
        </ul>
        <p className="sub-heads">Dish Type</p>
        <ul>
          {" "}
          {dishType.map((type) => {
            return (
              <li>
                {type
                  .substring(0, 1)
                  .toUpperCase()
                  .concat(type.substring(1).toLowerCase())}
              </li>
            );
          })}
        </ul>
        <p className="sub-heads">Health Labels</p>
        <ul className="health-labels-list">
          {healthLabels.map((label) => {
            return <li>{label}</li>;
          })}
        </ul>
        <p className="sub-heads">Meal Type</p>
        <ul>
          {mealType.map((type) => {
            return (
              <li>
                {" "}
                {type
                  .substring(0, 1)
                  .toUpperCase()
                  .concat(type.substring(1).toLowerCase())}
              </li>
            );
          })}
        </ul>
        <p className="sub-heads">Ingredients</p>
        <ul className="health-labels-list">
          {ingredientLines.map((ingredient) => {
            return <li className="ingredients-list">{ingredient}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Recipes;
