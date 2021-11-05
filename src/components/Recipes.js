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
        <p>
          Cuisine Type:{" "}
          {cuisineType
            .substring(0, 1)
            .toUpperCase()
            .concat(cuisineType.substring(1).toLowerCase())}
        </p>
        <p>Calories: {calories.toFixed(0)}</p>
        <p> Diet Labels:</p>
        <ul>
          {" "}
          {dietLabels.length > 0
            ? dietLabels.map((dietLabel) => {
                return <li>{dietLabel}</li>;
              })
            : "No information found"}
        </ul>
        <p>Dish Type:</p>
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
        <p>Health Labels:</p>
        <ul>
          {healthLabels.map((label) => {
            return <li>{label}</li>;
          })}
        </ul>
        <p>Meal Type:</p>
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
        <p>Ingredients:</p>
        <ul>
          {ingredientLines.map((ingredient) => {
            return <li className="ingredients">{ingredient}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Recipes;
