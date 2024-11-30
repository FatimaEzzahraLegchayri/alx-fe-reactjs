import {create} from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id)=>set(state => ({ recipes: state.recipes.filter((recipe)=>recipe.id !== id) })),
  updateRecipe: (id,updatedRecipe) => 
    set(state =>({
      recipes: state.recipes.map((recipe)=>{
        recipe.is == id ? {...recipe, ...updatedRecipe} 
        : recipe
      })
    }))
  // setRecipes: (recipes) => set({ recipes }),

}));
export default useRecipeStore