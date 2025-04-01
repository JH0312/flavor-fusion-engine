
import { Recipe, recipes } from "../data/recipes";

// Convert ingredient string to lowercase and remove amounts
const normalizeIngredient = (ingredient: string): string => {
  return ingredient.toLowerCase().trim();
};

// Find recipes that can be made with the available ingredients
export const findMatchingRecipes = (userIngredients: string[]): Recipe[] => {
  if (userIngredients.length === 0) return [];
  
  const normalizedUserIngredients = userIngredients.map(normalizeIngredient);
  
  return recipes.filter(recipe => {
    // Get all required ingredient names from the recipe
    const recipeIngredientNames = recipe.ingredients.map(ing => 
      normalizeIngredient(ing.name)
    );
    
    // Check if any user ingredient partially matches any recipe ingredient
    const hasAnyMatch = recipeIngredientNames.some(recipeIng => 
      normalizedUserIngredients.some(userIng => 
        recipeIng.includes(userIng) || userIng.includes(recipeIng)
      )
    );
    
    // Always return recipes that have at least one ingredient match
    return hasAnyMatch;
  });
};

// Sort recipes by how well they match the user's ingredients
export const sortRecipesByMatch = (
  recipes: Recipe[], 
  userIngredients: string[]
): Recipe[] => {
  const normalizedUserIngredients = userIngredients.map(normalizeIngredient);
  
  return [...recipes].sort((a, b) => {
    const aIngredients = a.ingredients.map(ing => normalizeIngredient(ing.name));
    const bIngredients = b.ingredients.map(ing => normalizeIngredient(ing.name));
    
    // Count total ingredient matches with more flexible matching
    const aMatches = aIngredients.filter(ing => 
      normalizedUserIngredients.some(userIng => 
        ing.includes(userIng) || userIng.includes(ing)
      )
    ).length;
    
    const bMatches = bIngredients.filter(ing => 
      normalizedUserIngredients.some(userIng => 
        ing.includes(userIng) || userIng.includes(ing)
      )
    ).length;
    
    // Sort by match ratio (descending)
    const aRatio = aMatches / aIngredients.length;
    const bRatio = bMatches / bIngredients.length;
    
    return bRatio - aRatio;
  });
};

// Get missing ingredients for a recipe
export const getMissingIngredients = (
  recipe: Recipe, 
  userIngredients: string[]
): string[] => {
  const normalizedUserIngredients = userIngredients.map(normalizeIngredient);
  
  return recipe.ingredients
    .filter(ing => {
      const normalizedName = normalizeIngredient(ing.name);
      return !normalizedUserIngredients.some(userIng => 
        normalizedName.includes(userIng) || userIng.includes(normalizedName)
      );
    })
    .map(ing => ing.name);
};
