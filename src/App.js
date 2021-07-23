import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.css";

function App() {
  const APP_ID = "4087347d";
  const APP_KEY = "17b794cbfedc062523f103761dea7c74";

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("Effect has been Run");
  // }, []); The empty [] in the end makes sure the useEffect is executed only once. You can also add conditions in that bracket like count===20 which means that the useEffect will only run when count= 20

  // UseEffect runs every time the page re-renders.

  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState(""); //This State is for detecting changes in the search box.
  const [query, setQuery] = useState("chicken"); //This state is for checking if the search button has been clicked.

  useEffect(() => {
    getRecipe();
  }, [query]); //We use query instead of search because otherwise the page will be reloaded and the api will be called everytime a new character is inputted in the search box.

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    ); //await is used because the program needs to wait depending on the internet connection to fetch the api data.
    const data = await response.json(); //We are converting the data returned into a json format to make it easier to work with.
    setRecipe(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  }; //This function is to ensure that the text in the search box changes when we type.

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  }; 

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          /> //The First recipe in recipe.recipe refers to the object we created in the recipes.map function. The second recipe refers to the variable name of the meal title from the api.
        ))}
      </div>
    </div>
  );
}

export default App;
