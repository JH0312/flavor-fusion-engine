
import { Recipe } from "@/data/recipes";
import { Clock, Users } from "lucide-react";

interface RecipeCardProps {
  recipe: Recipe;
  userIngredients: string[];
  onClick: () => void;
}

const RecipeCard = ({ recipe, userIngredients, onClick }: RecipeCardProps) => {
  // Calculate how many ingredients user has vs total needed
  const recipeIngredientNames = recipe.ingredients.map(ing => ing.name.toLowerCase());
  const matchedCount = recipeIngredientNames.filter(name => 
    userIngredients.some(ui => ui === name.toLowerCase() || name.includes(ui))
  ).length;
  
  const matchPercentage = Math.round((matchedCount / recipeIngredientNames.length) * 100);
  
  return (
    <div className="recipe-card group cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.name} 
          className="recipe-card-image"
        />
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-semibold">
          Match: {matchPercentage}%
        </div>
      </div>
      
      <div className="recipe-card-content">
        <h3 className="recipe-card-title group-hover:text-recipe-orange transition-colors">{recipe.name}</h3>
        <p className="recipe-card-description">{recipe.description}</p>
        
        <div className="recipe-card-meta">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{recipe.cookingTime} min</span>
          </div>
          
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
