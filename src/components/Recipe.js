import React from 'react';

const Recipe = ({ recipe, onDelete }) => {
  return (
    <div className="recipe-item" data-recipe-id={recipe.id}>
      <img src={recipe.image || 'placeholder.jpg'} alt={recipe.title} />
      <div className="recipe-details">
        <h2>{recipe.title}</h2>
        <div className="ingredients">
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
        <p>{recipe.description}</p>
        <button onClick={() => onDelete(recipe.id)}>Delete</button> {/* Delete button */}
      </div>
    </div>
  );
};

export default Recipe;