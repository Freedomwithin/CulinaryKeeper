import React, { useState } from "react";
import "./AddRecipe.css"; // Import CSS for AddRecipe

function AddRecipe({ onRecipeAdded }) {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRecipeAdded({ recipeName, ingredients });
    setRecipeName("");
    setIngredients("");
  };

  return (
    <form className="add-recipe-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="recipe-name">Recipe Name</label>
        <input
          type="text"
          id="recipe-name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <button type="submit" className="add-recipe-button">Add Recipe</button>
    </form>
  );
}

export default AddRecipe;