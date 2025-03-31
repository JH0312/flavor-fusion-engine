import { Recipe, recipes } from "../data/recipes";

// Convert ingredient string to lowercase and remove amounts
const normalizeIngredient = (ingredient: string): string => {
  return ingredient.toLowerCase().trim();
};

// Find recipes that can be made with the available ingredients
export const findMatchingRecipes = (userIngredients: string[]): Recipe[] => {
  const normalizedUserIngredients = userIngredients.map(normalizeIngredient);
  
  return recipes.filter(recipe => {
    // Get all required ingredient names from the recipe
    const recipeIngredientNames = recipe.ingredients.map(ing => 
      normalizeIngredient(ing.name)
    );
    
    // Calculate how many of the recipe ingredients the user has
    const matchedIngredients = recipeIngredientNames.filter(
      ingredientName => normalizedUserIngredients.some(userIng => 
        userIng === ingredientName || ingredientName.includes(userIng)
      )
    );
    
    // For few user ingredients, be more lenient with matching
    if (userIngredients.length <= 3) {
      // If user has 1-3 ingredients, show recipes where they have at least 1 ingredient
      return matchedIngredients.length >= 1;
    } else {
      // For more ingredients, keep the 60% threshold
      const matchRatio = matchedIngredients.length / recipeIngredientNames.length;
      return matchRatio >= 0.6;
    }
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
    
    const aMatches = aIngredients.filter(ing => 
      normalizedUserIngredients.some(userIng => 
        userIng === ing || ing.includes(userIng)
      )
    ).length;
    
    const bMatches = bIngredients.filter(ing => 
      normalizedUserIngredients.some(userIng => 
        userIng === ing || ing.includes(userIng)
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
        userIng === normalizedName || normalizedName.includes(userIng)
      );
    })
    .map(ing => ing.name);
};
