import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    let formIsValid = true;
    const newErrors = {
      title: '',
      ingredients: '',
      steps: '',
    };

    if (!title) {
      newErrors.title = 'Title is required';
      formIsValid = false;
    }
    if (!ingredients || ingredients.split('\n').length < 2) {
      newErrors.ingredients = 'Please list at least two ingredients';
      formIsValid = false;
    }
    if (!steps) {
      newErrors.steps = 'Preparation steps are required';
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission (e.g., save data to a database or send to an API)
    console.log({
      title,
      ingredients: ingredients.split('\n'),
      steps: steps.split('\n'),
    });

    // Clear form after submission
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({
      title: '',
      ingredients: '',
      steps: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        {/* Title Field */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
        </div>

        {/* Ingredients Field */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients (separate each ingredient with a newline)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300'
            }`}
            rows="4"
          />
          {errors.ingredients && <p className="text-sm text-red-500">{errors.ingredients}</p>}
        </div>

        {/* Steps Field */}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.steps ? 'border-red-500' : 'border-gray-300'
            }`}
            rows="6"
          />
          {errors.steps && <p className="text-sm text-red-500">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="md  w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;
validate