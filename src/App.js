import React, { useState } from 'react'
import Card from './Card';

function App() {
    const [searchValue, setSearchValue] = useState("");
    const [sliderValue, setSliderValue] = useState(25);
    const [meals, setMeals] = useState([]);
    const [sort, setSort] = useState("");
    const api ="https://www.themealdb.com/api/json/v1/1/search.php?s=";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const request = await fetch(
            api + searchValue
        );
        const data = await request.json();
        setMeals(data.meals)
        console.log(meals);
    };


  return (
    <div>
      <header>
        <h1>React Meals</h1>
        <input type='range' min="1" max ="50" onInput={(e) => setSliderValue(e.target.value)}/>
        <span> {sliderValue}</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom de la recette"
            onInput={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <input type="submit" value="Rechercher" />
        </form>
        <button className='sort' onClick={() => setSort("alphabétique")}>
          Tri Alphabétique
        </button>
      </header>
      <main>
        {meals
        .sort((a, b) => {
            if (sort === "alphabétique") {
                return a.strMeal.localeCompare(b.strMeal);
            }
        })
        .slice(0, sliderValue)
        .map((meal, index) => {
          return <Card meal={meal} key={index} />;
        })}
      </main>
    </div>
  );
}

export default App