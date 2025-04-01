
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
    
    // Return recipes with any ingredient match, making the matching more inclusive
    return hasAnyMatch;
  });
};

// Enhanced sorting to give preference to recipes with exact ingredient matches
export const sortRecipesByMatch = (
  recipes: Recipe[], 
  userIngredients: string[]
): Recipe[] => {
  const normalizedUserIngredients = userIngredients.map(normalizeIngredient);
  
  return [...recipes].sort((a, b) => {
    const aIngredients = a.ingredients.map(ing => normalizeIngredient(ing.name));
    const bIngredients = b.ingredients.map(ing => normalizeIngredient(ing.name));
    
    // Count exact ingredient matches (full word matches)
    const aExactMatches = aIngredients.filter(ing => 
      normalizedUserIngredients.some(userIng => ing === userIng)
    ).length;
    
    const bExactMatches = bIngredients.filter(ing => 
      normalizedUserIngredients.some(userIng => ing === userIng)
    ).length;
    
    // Count partial ingredient matches
    const aPartialMatches = aIngredients.filter(ing => 
      normalizedUserIngredients.some(userIng => 
        ing.includes(userIng) || userIng.includes(ing)
      )
    ).length;
    
    const bPartialMatches = bIngredients.filter(ing => 
      normalizedUserIngredients.some(userIng => 
        ing.includes(userIng) || userIng.includes(ing)
      )
    ).length;
    
    // Prioritize exact matches, but also consider partial matches
    // Formula: (exactMatches * 2 + partialMatches) / totalIngredients
    const aRatio = (aExactMatches * 2 + aPartialMatches) / aIngredients.length;
    const bRatio = (bExactMatches * 2 + bPartialMatches) / bIngredients.length;
    
    // Sort by match ratio in descending order (higher ratios first)
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
