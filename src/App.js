import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  
  const APP_ID = "4087347d";
  const APP_KEY = '17b794cbfedc062523f103761dea7c74'; 
  
  // const [count, setCount] = useState(0);
  
  // useEffect(() => {
  //   console.log("Effect has been Run");
  // }, []); The empty [] in the end makes sure the useEffect is executed only once. You can also add conditions in that bracket like count===20 which means that the useEffect will only run when count= 20

  // UseEffect runs every time the page re-renders.

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`); //await is used because the program needs to wait depending on the internet connection to fetch the api data.
    const data = await response.json(); //We are converting the data returned into a json format to make it easier to work with.
    setRecipe(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
