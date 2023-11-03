import React from 'react'

function Card({meal}) {
  return (
    <div className="card">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={"image de la recette" + meal.strMeal} />
      <p className="origine">{meal.strArea}</p>
      <p className="recette">{meal.strInstructions}</p>
    </div>
  );
}

export default Card