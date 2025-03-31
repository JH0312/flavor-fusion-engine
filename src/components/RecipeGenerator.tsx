
import { useState, useEffect } from "react";
import { Recipe } from "@/data/recipes";
import { findMatchingRecipes, sortRecipesByMatch, getMissingIngredients } from "@/utils/recipeUtils";
import RecipeCard from "./RecipeCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Check, X, Clock, Users } from "lucide-react";

interface RecipeGeneratorProps {
  ingredients: string[];
}

const RecipeGenerator = ({ ingredients }: RecipeGeneratorProps) => {
  const [matchingRecipes, setMatchingRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [missingIngredients, setMissingIngredients] = useState<string[]>([]);

  useEffect(() => {
    if (ingredients.length > 0) {
      const matches = findMatchingRecipes(ingredients);
      const sortedMatches = sortRecipesByMatch(matches, ingredients);
      setMatchingRecipes(sortedMatches);
    } else {
      setMatchingRecipes([]);
    }
  }, [ingredients]);

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setMissingIngredients(getMissingIngredients(recipe, ingredients));
  };

  const closeDialog = () => {
    setSelectedRecipe(null);
  };

  if (ingredients.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-3 text-recipe-dark">Ready to discover recipes?</h3>
        <p className="text-gray-600">Add some ingredients to get started!</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-recipe-dark">
        {matchingRecipes.length > 0
          ? `Found ${matchingRecipes.length} recipes you can make!`
          : "No matching recipes found"}
      </h2>

      {matchingRecipes.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">Try adding more ingredients to see what you can make.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {matchingRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            userIngredients={ingredients}
            onClick={() => handleRecipeClick(recipe)}
          />
        ))}
      </div>

      {/* Recipe Dialog */}
      <Dialog open={!!selectedRecipe} onOpenChange={() => closeDialog()}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedRecipe && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-recipe-dark">
                  {selectedRecipe.name}
                </DialogTitle>
                <DialogDescription>
                  {selectedRecipe.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <img
                  src={selectedRecipe.image}
                  alt={selectedRecipe.name}
                  className="w-full h-64 object-cover rounded-md mb-6"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-recipe-dark">Ingredients</h3>
                    <ul className="space-y-2">
                      {selectedRecipe.ingredients.map((ing, idx) => {
                        const isAvailable = ingredients.some(
                          (i) => i === ing.name.toLowerCase() || ing.name.toLowerCase().includes(i)
                        );

                        return (
                          <li
                            key={idx}
                            className={`flex items-center ${
                              isAvailable ? "text-recipe-dark" : "text-gray-500"
                            }`}
                          >
                            {isAvailable ? (
                              <Check className="h-4 w-4 mr-2 text-recipe-green" />
                            ) : (
                              <X className="h-4 w-4 mr-2 text-recipe-red" />
                            )}
                            <span>
                              {ing.amount} {ing.name}
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    {missingIngredients.length > 0 && (
                      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-md">
                        <h4 className="font-medium text-amber-800 mb-1">
                          Missing ingredients:
                        </h4>
                        <p className="text-amber-700 text-sm">
                          {missingIngredients.join(", ")}
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-recipe-dark">Instructions</h3>
                    <ol className="space-y-3 list-decimal list-inside">
                      {selectedRecipe.instructions.map((step, idx) => (
                        <li key={idx} className="text-gray-700">{step}</li>
                      ))}
                    </ol>

                    <div className="mt-6 flex items-center text-sm text-gray-500 justify-between">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{selectedRecipe.cookingTime} minutes</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>Serves {selectedRecipe.servings}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RecipeGenerator;
