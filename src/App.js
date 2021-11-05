import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Recipes from "./components/Recipes";
import { FaSearch } from "react-icons/fa";
import Header from "./components/Header";
import "./App.scss";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    fetchedRecipes("chicken");
  }, []);

  const fetchedRecipes = async (searchItems) => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${searchItems}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`
    );
    const result = await response.json();
    console.log(result);
    setRecipes(result.hits);
  };

  const searchNewRecipes = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    if (inputRef.current.value.trim() !== "") {
      fetchedRecipes(inputRef.current.value);
    }
    inputRef.current.value = "";
  };

  return (
    <div className="App">
      <Header />
      <div className="container ">
        <form onSubmit={searchNewRecipes} className="search-form">
          <div>
            <input
              name="recipe"
              className="search-bar"
              type="text"
              ref={inputRef}
              placeholder="Ingredient,dish,keywords"
            />
            <button className="search-button" type="submit">
              <FaSearch />
            </button>
          </div>
        </form>
        {recipes.map((recipe) => {
          return (
            <Recipes
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              cuisineType={recipe.recipe.cuisineType[0]}
              ingredientLines={recipe.recipe.ingredientLines}
              dietLabels={recipe.recipe.dietLabels}
              dishType={recipe.recipe.dishType}
              healthLabels={recipe.recipe.healthLabels}
              mealType={recipe.recipe.mealType}
              person={recipe.recipe.yield}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
