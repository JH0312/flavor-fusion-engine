
import { useState, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Plus } from "lucide-react";
import { toast } from "sonner";

interface IngredientInputProps {
  ingredients: string[];
  setIngredients: (ingredients: string[]) => void;
}

const IngredientInput = ({ ingredients, setIngredients }: IngredientInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const addIngredient = () => {
    const trimmedValue = inputValue.trim();
    
    if (!trimmedValue) {
      return;
    }

    if (ingredients.includes(trimmedValue.toLowerCase())) {
      toast.error("This ingredient is already in your list!");
      return;
    }

    setIngredients([...ingredients, trimmedValue.toLowerCase()]);
    setInputValue("");
  };

  const removeIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter((i) => i !== ingredient));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addIngredient();
    }
  };

  const handleAddSampleIngredients = () => {
    const sampleIngredients = ["eggs", "milk", "butter", "bread", "tomatoes"];
    const newIngredients = [...ingredients];
    
    // Add sample ingredients that aren't already in the list
    sampleIngredients.forEach(ingredient => {
      if (!ingredients.includes(ingredient)) {
        newIngredients.push(ingredient);
      }
    });
    
    setIngredients(newIngredients);
    toast.success("Sample ingredients added!");
  }
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-recipe-dark mb-2">What's in your kitchen?</h2>
        <p className="text-gray-600 mb-4">Enter the ingredients you have and we'll find recipes you can make.</p>
        
        <div className="flex gap-2 mb-4">
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type an ingredient (e.g. chicken, pasta, onions)"
            className="flex-grow"
          />
          <Button 
            onClick={addIngredient}
            className="bg-recipe-green hover:bg-recipe-green/90"
          >
            <Plus className="mr-1 h-4 w-4" /> Add
          </Button>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleAddSampleIngredients}
          className="text-recipe-dark border-recipe-dark hover:bg-recipe-yellow/20"
        >
          Use sample ingredients
        </Button>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Your ingredients:</h3>
        <div className="flex flex-wrap">
          {ingredients.length === 0 ? (
            <p className="text-gray-500 italic">No ingredients added yet.</p>
          ) : (
            ingredients.map((ingredient) => (
              <div key={ingredient} className="ingredient-tag">
                {ingredient}
                <button
                  onClick={() => removeIngredient(ingredient)}
                  className="ml-2 text-recipe-dark/70 hover:text-recipe-dark"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default IngredientInput;
