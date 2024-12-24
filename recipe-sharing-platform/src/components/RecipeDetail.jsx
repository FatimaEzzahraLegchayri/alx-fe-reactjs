import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json';

function RecipeDetail() {
  const { id } = useParams(); // Get the id from the URL
  const navigate = useNavigate(); // For navigation
  const [recipe, setRecipe] = useState(null);

  // Fetch the recipe details based on the ID
  useEffect(() => {
    const selectedRecipe = recipeData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>; // Show loading until the recipe data is fetched
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => navigate('/')} 
        className="text-blue-500 hover:text-blue-700 mb-4"
      >
        &lt; Back to Home
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h1 className="text-3xl font-bold text-blue-800 mb-4">{recipe.title}</h1>
          <p className="text-gray-600 text-sm mb-4">{recipe.summary}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700 mb-8">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Cooking Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
