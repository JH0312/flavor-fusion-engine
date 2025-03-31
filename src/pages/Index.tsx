
import { useState } from "react";
import { UtensilsCrossed } from "lucide-react";
import IngredientInput from "@/components/IngredientInput";
import RecipeGenerator from "@/components/RecipeGenerator";

const Index = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center">
            <UtensilsCrossed className="h-8 w-8 text-recipe-orange mr-2" />
            <h1 className="text-3xl font-bold text-recipe-dark">
              Flavor Fusion
            </h1>
          </div>
          <p className="text-center text-gray-600 mt-1">
            Find delicious recipes with ingredients you already have
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <IngredientInput 
            ingredients={ingredients} 
            setIngredients={setIngredients} 
          />
        </div>

        <div className="mt-6">
          <RecipeGenerator ingredients={ingredients} />
        </div>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Flavor Fusion - Made with ingredients you already have
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
