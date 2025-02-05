import React from "react";

function RecipeList({ recipes, onDelete }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <h2>{recipe.recipeName}</h2>
          <p>{recipe.ingredients}</p>
          <button onClick={() => onDelete(recipe.id)} className="delete-button">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;