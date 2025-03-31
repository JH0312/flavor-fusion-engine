
export interface Recipe {
  id: string;
  name: string;
  image: string;
  cookingTime: number; // in minutes
  servings: number;
  description: string;
  ingredients: {
    name: string;
    amount: string;
  }[];
  instructions: string[];
  tags: string[];
}

export const recipes: Recipe[] = [
  {
    id: "1",
    name: "Spaghetti Aglio e Olio",
    image: "https://images.unsplash.com/photo-1589227365533-cee630bd59bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    cookingTime: 20,
    servings: 2,
    description: "A simple, classic Italian pasta dish with garlic, olive oil, and chili flakes.",
    ingredients: [
      { name: "spaghetti", amount: "200g" },
      { name: "garlic", amount: "4 cloves" },
      { name: "olive oil", amount: "1/4 cup" },
      { name: "red pepper flakes", amount: "1/2 tsp" },
      { name: "parsley", amount: "2 tbsp" },
      { name: "salt", amount: "to taste" },
      { name: "black pepper", amount: "to taste" }
    ],
    instructions: [
      "Bring a large pot of salted water to a boil. Add spaghetti and cook until al dente.",
      "Meanwhile, slice the garlic thinly. Heat olive oil in a large pan over medium heat.",
      "Add garlic and red pepper flakes to the oil and cook until garlic is just golden.",
      "Drain pasta, reserving 1/2 cup of pasta water.",
      "Add pasta to the pan with garlic oil, toss to coat. Add some pasta water if needed.",
      "Season with salt and pepper, and garnish with chopped parsley."
    ],
    tags: ["pasta", "italian", "quick", "vegetarian"]
  },
  {
    id: "2",
    name: "Vegetable Stir Fry",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=2072&q=80",
    cookingTime: 15,
    servings: 4,
    description: "A quick and healthy stir fry loaded with colorful vegetables.",
    ingredients: [
      { name: "bell peppers", amount: "2, sliced" },
      { name: "broccoli", amount: "1 cup, florets" },
      { name: "carrots", amount: "2, julienned" },
      { name: "onion", amount: "1, sliced" },
      { name: "garlic", amount: "2 cloves, minced" },
      { name: "ginger", amount: "1 tbsp, minced" },
      { name: "soy sauce", amount: "3 tbsp" },
      { name: "vegetable oil", amount: "2 tbsp" }
    ],
    instructions: [
      "Heat oil in a wok or large frying pan over high heat.",
      "Add garlic and ginger, stir for 30 seconds until fragrant.",
      "Add onions and cook for 1 minute.",
      "Add the remaining vegetables and stir fry for 3-4 minutes until crisp-tender.",
      "Add soy sauce and toss to coat all vegetables.",
      "Serve hot with rice or noodles."
    ],
    tags: ["vegetarian", "quick", "healthy", "asian"]
  },
  {
    id: "3",
    name: "Scrambled Eggs with Toast",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80",
    cookingTime: 10,
    servings: 1,
    description: "Quick and fluffy scrambled eggs served with toast - a perfect breakfast.",
    ingredients: [
      { name: "eggs", amount: "3" },
      { name: "milk", amount: "2 tbsp" },
      { name: "butter", amount: "1 tbsp" },
      { name: "salt", amount: "to taste" },
      { name: "black pepper", amount: "to taste" },
      { name: "bread", amount: "2 slices" }
    ],
    instructions: [
      "Whisk eggs with milk, salt, and pepper in a bowl.",
      "Melt butter in a non-stick pan over medium-low heat.",
      "Pour in egg mixture and cook, stirring gently until eggs are soft and creamy, about 2-3 minutes.",
      "Meanwhile, toast bread until golden brown.",
      "Serve scrambled eggs with toast."
    ],
    tags: ["breakfast", "quick", "vegetarian"]
  },
  {
    id: "4",
    name: "Simple Tomato Salad",
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    cookingTime: 5,
    servings: 2,
    description: "Fresh, vibrant tomato salad with herbs and olive oil.",
    ingredients: [
      { name: "tomatoes", amount: "4 medium" },
      { name: "red onion", amount: "1/4, thinly sliced" },
      { name: "olive oil", amount: "2 tbsp" },
      { name: "balsamic vinegar", amount: "1 tbsp" },
      { name: "basil", amount: "handful, torn" },
      { name: "salt", amount: "to taste" },
      { name: "black pepper", amount: "to taste" }
    ],
    instructions: [
      "Slice tomatoes and arrange on a plate.",
      "Scatter sliced red onion over the tomatoes.",
      "Drizzle with olive oil and balsamic vinegar.",
      "Season with salt and pepper.",
      "Top with torn basil leaves.",
      "Let sit for a few minutes before serving to let flavors meld."
    ],
    tags: ["salad", "quick", "vegetarian", "vegan", "no-cook"]
  },
  {
    id: "5",
    name: "Banana Smoothie",
    image: "https://images.unsplash.com/photo-1553530666-ba11a90bb3ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80",
    cookingTime: 5,
    servings: 1,
    description: "A creamy, refreshing smoothie that's perfect for breakfast or a snack.",
    ingredients: [
      { name: "banana", amount: "1 ripe" },
      { name: "milk", amount: "1 cup" },
      { name: "yogurt", amount: "1/4 cup" },
      { name: "honey", amount: "1 tbsp" },
      { name: "ice cubes", amount: "4-5" }
    ],
    instructions: [
      "Add all ingredients to a blender.",
      "Blend until smooth and creamy.",
      "Pour into a glass and serve immediately."
    ],
    tags: ["breakfast", "beverage", "quick", "no-cook"]
  },
  {
    id: "6",
    name: "Garlic Butter Chicken",
    image: "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2068&q=80",
    cookingTime: 30,
    servings: 4,
    description: "Juicy chicken breasts cooked in a flavorful garlic butter sauce.",
    ingredients: [
      { name: "chicken breasts", amount: "4" },
      { name: "butter", amount: "4 tbsp" },
      { name: "garlic", amount: "4 cloves, minced" },
      { name: "chicken broth", amount: "1 cup" },
      { name: "thyme", amount: "2 sprigs" },
      { name: "salt", amount: "to taste" },
      { name: "black pepper", amount: "to taste" },
      { name: "olive oil", amount: "2 tbsp" }
    ],
    instructions: [
      "Season chicken breasts with salt and pepper.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Add chicken and cook for 5-6 minutes per side until golden and cooked through. Remove to a plate.",
      "In the same skillet, add butter and garlic, cook for 1 minute until fragrant.",
      "Pour in chicken broth and add thyme. Bring to a simmer and let reduce by half.",
      "Return chicken to the skillet and spoon sauce over it. Cook for another 2 minutes.",
      "Serve chicken with the garlic butter sauce."
    ],
    tags: ["chicken", "dinner", "main course"]
  }
];
