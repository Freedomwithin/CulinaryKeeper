import React, { useState } from "react";
import AddRecipe from "./components/AddRecipe";
import RecipeList from "./components/RecipeList";
import "./App.css"; // Import the CSS file

function App() {
  const [recipes, setRecipes] = useState({});

  const handleRecipeAdded = (newRecipe) => {
    const newRecipeId = Date.now();
    setRecipes((prevRecipes) => ({
      ...prevRecipes,
      [newRecipeId]: { ...newRecipe, id: newRecipeId },
    }));
  };

  const handleDeleteRecipe = (id) => {
    setRecipes((prevRecipes) => {
      const updatedRecipes = { ...prevRecipes };
      delete updatedRecipes[id];
      return updatedRecipes;
    });
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Recipe Tracker</h1>
      </header>
      <div className="container">
        <AddRecipe onRecipeAdded={handleRecipeAdded} />
        <RecipeList
          recipes={Object.values(recipes)}
          onDelete={handleDeleteRecipe}
        />
      </div>
    </div>
  );
}

export default App;