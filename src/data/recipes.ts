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
  },
  {
    id: "7",
    name: "One-Pot Pasta Primavera",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    cookingTime: 25,
    servings: 4,
    description: "A simple, colorful pasta dish loaded with fresh vegetables and herbs.",
    ingredients: [
      { name: "pasta", amount: "300g" },
      { name: "bell peppers", amount: "1, sliced" },
      { name: "zucchini", amount: "1, sliced" },
      { name: "cherry tomatoes", amount: "1 cup, halved" },
      { name: "onion", amount: "1, chopped" },
      { name: "garlic", amount: "3 cloves, minced" },
      { name: "olive oil", amount: "3 tbsp" },
      { name: "vegetable broth", amount: "3 cups" },
      { name: "parmesan cheese", amount: "1/4 cup, grated" },
      { name: "basil", amount: "handful, torn" }
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat.",
      "Add onion and garlic, sauté until fragrant.",
      "Add bell peppers and zucchini, cook for 2 minutes.",
      "Add pasta, vegetable broth, and cherry tomatoes.",
      "Bring to a boil, then reduce heat and simmer until pasta is cooked and liquid is mostly absorbed.",
      "Stir in parmesan cheese and basil.",
      "Season with salt and pepper to taste."
    ],
    tags: ["pasta", "vegetarian", "one-pot", "quick"]
  },
  {
    id: "8",
    name: "Chicken Tikka Masala",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80",
    cookingTime: 40,
    servings: 4,
    description: "Classic Indian dish with tender chicken in a creamy, spiced tomato sauce.",
    ingredients: [
      { name: "chicken breasts", amount: "500g, cubed" },
      { name: "yogurt", amount: "1/2 cup" },
      { name: "lemon juice", amount: "2 tbsp" },
      { name: "garam masala", amount: "2 tsp" },
      { name: "turmeric", amount: "1 tsp" },
      { name: "cumin", amount: "1 tsp" },
      { name: "onion", amount: "1, finely chopped" },
      { name: "garlic", amount: "3 cloves, minced" },
      { name: "ginger", amount: "1 tbsp, grated" },
      { name: "tomato sauce", amount: "2 cups" },
      { name: "heavy cream", amount: "1/2 cup" },
      { name: "cilantro", amount: "for garnish" }
    ],
    instructions: [
      "Mix yogurt, lemon juice, and half the spices to make marinade.",
      "Add chicken to marinade and refrigerate for at least 30 minutes.",
      "In a large pan, sauté onion, garlic, and ginger until soft.",
      "Add remaining spices and cook for 1 minute until fragrant.",
      "Add tomato sauce and simmer for 10 minutes.",
      "Cook marinated chicken in a separate pan until browned.",
      "Add chicken to the sauce and simmer for 10 minutes.",
      "Stir in heavy cream and simmer for 5 more minutes.",
      "Garnish with cilantro and serve with rice or naan."
    ],
    tags: ["chicken", "indian", "curry", "spicy"]
  },
  {
    id: "9",
    name: "Avocado Toast",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80",
    cookingTime: 10,
    servings: 2,
    description: "Simple and nutritious breakfast topped with creamy avocado.",
    ingredients: [
      { name: "bread", amount: "2 slices" },
      { name: "avocado", amount: "1, ripe" },
      { name: "lemon juice", amount: "1 tsp" },
      { name: "salt", amount: "to taste" },
      { name: "red pepper flakes", amount: "pinch" },
      { name: "eggs", amount: "2 (optional)" }
    ],
    instructions: [
      "Toast bread until golden and crispy.",
      "Mash avocado in a bowl with lemon juice, salt, and pepper.",
      "Spread avocado mixture on toast.",
      "Top with red pepper flakes.",
      "Optional: Add a fried or poached egg on top."
    ],
    tags: ["breakfast", "vegetarian", "quick", "healthy"]
  },
  {
    id: "10",
    name: "Chocolate Chip Cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1999&q=80",
    cookingTime: 25,
    servings: 24,
    description: "Classic homemade chocolate chip cookies that are soft in the center and crispy on the edges.",
    ingredients: [
      { name: "butter", amount: "1 cup, softened" },
      { name: "granulated sugar", amount: "1/2 cup" },
      { name: "brown sugar", amount: "1 cup" },
      { name: "eggs", amount: "2" },
      { name: "vanilla extract", amount: "2 tsp" },
      { name: "flour", amount: "3 cups" },
      { name: "baking soda", amount: "1 tsp" },
      { name: "salt", amount: "1/2 tsp" },
      { name: "chocolate chips", amount: "2 cups" }
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Cream together butter and sugars until light and fluffy.",
      "Beat in eggs one at a time, then add vanilla.",
      "In a separate bowl, combine flour, baking soda, and salt.",
      "Gradually add dry ingredients to wet ingredients.",
      "Fold in chocolate chips.",
      "Drop by rounded tablespoons onto ungreased baking sheets.",
      "Bake for 9-11 minutes until golden around the edges.",
      "Cool on baking sheets for 2 minutes before transferring to wire racks."
    ],
    tags: ["dessert", "baking", "sweet", "chocolate"]
  },
  {
    id: "11",
    name: "Beef and Broccoli Stir Fry",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    cookingTime: 20,
    servings: 4,
    description: "Quick and flavorful beef stir fry with crisp broccoli in a savory sauce.",
    ingredients: [
      { name: "beef sirloin", amount: "500g, thinly sliced" },
      { name: "broccoli", amount: "1 head, cut into florets" },
      { name: "garlic", amount: "3 cloves, minced" },
      { name: "ginger", amount: "1 tbsp, minced" },
      { name: "soy sauce", amount: "1/4 cup" },
      { name: "oyster sauce", amount: "2 tbsp" },
      { name: "sesame oil", amount: "1 tbsp" },
      { name: "cornstarch", amount: "1 tbsp" },
      { name: "vegetable oil", amount: "2 tbsp" }
    ],
    instructions: [
      "Mix soy sauce, oyster sauce, sesame oil, and cornstarch to make the sauce.",
      "Heat vegetable oil in a large wok or skillet over high heat.",
      "Add beef and stir-fry until browned, about 3-4 minutes. Remove and set aside.",
      "In the same pan, add garlic and ginger, stir for 30 seconds.",
      "Add broccoli and stir-fry for 4 minutes until bright green and crisp-tender.",
      "Return beef to the pan, add sauce and stir until thickened.",
      "Serve hot with rice."
    ],
    tags: ["beef", "asian", "stir-fry", "quick"]
  },
  {
    id: "12",
    name: "Mediterranean Quinoa Salad",
    image: "https://images.unsplash.com/photo-1529059997568-3e58a8e1d9b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    cookingTime: 25,
    servings: 6,
    description: "Fresh and hearty salad with protein-rich quinoa and Mediterranean flavors.",
    ingredients: [
      { name: "quinoa", amount: "1 cup, rinsed" },
      { name: "cucumber", amount: "1, diced" },
      { name: "cherry tomatoes", amount: "1 cup, halved" },
      { name: "red onion", amount: "1/2, finely diced" },
      { name: "bell pepper", amount: "1, diced" },
      { name: "feta cheese", amount: "1/2 cup, crumbled" },
      { name: "olives", amount: "1/2 cup, sliced" },
      { name: "parsley", amount: "1/4 cup, chopped" },
      { name: "lemon juice", amount: "3 tbsp" },
      { name: "olive oil", amount: "3 tbsp" },
      { name: "garlic", amount: "1 clove, minced" }
    ],
    instructions: [
      "Cook quinoa according to package instructions, then let cool.",
      "In a large bowl, combine quinoa, cucumber, tomatoes, onion, bell pepper, feta, olives, and parsley.",
      "In a small bowl, whisk together lemon juice, olive oil, garlic, salt, and pepper.",
      "Pour dressing over salad and toss to combine.",
      "Chill for at least 30 minutes before serving to let flavors meld."
    ],
    tags: ["salad", "vegetarian", "healthy", "mediterranean"]
  },
  {
    id: "13",
    name: "Homemade Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    cookingTime: 45,
    servings: 4,
    description: "Create your own pizza with your favorite toppings on a homemade crust.",
    ingredients: [
      { name: "flour", amount: "3 cups" },
      { name: "yeast", amount: "1 packet" },
      { name: "sugar", amount: "1 tsp" },
      { name: "salt", amount: "1 tsp" },
      { name: "warm water", amount: "1 cup" },
      { name: "olive oil", amount: "2 tbsp" },
      { name: "tomato sauce", amount: "1 cup" },
      { name: "cheese", amount: "2 cups, shredded" },
      { name: "pepperoni", amount: "1/2 cup (optional)" },
      { name: "mushrooms", amount: "1 cup, sliced (optional)" },
      { name: "bell peppers", amount: "1, sliced (optional)" },
      { name: "onion", amount: "1/2, sliced (optional)" }
    ],
    instructions: [
      "Dissolve yeast and sugar in warm water, let stand for 10 minutes until foamy.",
      "In a large bowl, mix flour and salt. Add yeast mixture and olive oil.",
      "Knead dough until smooth, about 10 minutes. Place in oiled bowl and let rise for 30 minutes.",
      "Preheat oven to 450°F (230°C).",
      "Roll out dough on floured surface and transfer to pizza pan.",
      "Spread tomato sauce over dough, sprinkle with cheese, and add desired toppings.",
      "Bake for 15-20 minutes until crust is golden and cheese is bubbly."
    ],
    tags: ["italian", "dinner", "customizable"]
  },
  {
    id: "14",
    name: "Berry Smoothie Bowl",
    image: "https://images.unsplash.com/photo-1501147830916-ce44a6359892?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    cookingTime: 10,
    servings: 1,
    description: "Thick, creamy smoothie bowl topped with fresh fruits and granola.",
    ingredients: [
      { name: "frozen berries", amount: "1 cup" },
      { name: "banana", amount: "1, frozen" },
      { name: "yogurt", amount: "1/2 cup" },
      { name: "milk", amount: "1/4 cup" },
      { name: "honey", amount: "1 tbsp" },
      { name: "granola", amount: "1/4 cup" },
      { name: "fresh berries", amount: "1/4 cup" },
      { name: "chia seeds", amount: "1 tsp" }
    ],
    instructions: [
      "Blend frozen berries, banana, yogurt, milk, and honey until smooth and thick.",
      "Pour into a bowl.",
      "Top with granola, fresh berries, and chia seeds.",
      "Serve immediately."
    ],
    tags: ["breakfast", "healthy", "no-cook", "fruit"]
  },
  {
    id: "15",
    name: "Lentil Soup",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    cookingTime: 45,
    servings: 6,
    description: "Hearty and nutritious soup with lentils and vegetables.",
    ingredients: [
      { name: "lentils", amount: "2 cups, rinsed" },
      { name: "onion", amount: "1, diced" },
      { name: "carrots", amount: "2, diced" },
      { name: "celery", amount: "2 stalks, diced" },
      { name: "garlic", amount: "3 cloves, minced" },
      { name: "tomatoes", amount: "1 can, diced" },
      { name: "vegetable broth", amount: "6 cups" },
      { name: "cumin", amount: "1 tsp" },
      { name: "bay leaf", amount: "1" },
      { name: "olive oil", amount: "2 tbsp" },
      { name: "spinach", amount: "2 cups, chopped" },
      { name: "lemon juice", amount: "2 tbsp" }
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat.",
      "Add onion, carrots, and celery. Sauté for 5 minutes.",
      "Add garlic and cook for 1 minute.",
      "Add lentils, tomatoes, broth, cumin, and bay leaf.",
      "Bring to a boil, then reduce heat and simmer for 25-30 minutes until lentils are tender.",
      "Stir in spinach and cook until wilted.",
      "Remove bay leaf, add lemon juice, and season with salt and pepper."
    ],
    tags: ["soup", "vegetarian", "healthy", "comfort food"]
  },
  {
    id: "16",
    name: "Creamy Mushroom Risotto",
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2074&q=80",
    cookingTime: 40,
    servings: 4,
    description: "Rich and creamy Italian rice dish with mushrooms and parmesan.",
    ingredients: [
      { name: "arborio rice", amount: "1.5 cups" },
      { name: "mushrooms", amount: "300g, sliced" },
      { name: "onion", amount: "1, finely diced" },
      { name: "garlic", amount: "2 cloves, minced" },
      { name: "white wine", amount: "1/2 cup" },
      { name: "vegetable broth", amount: "5 cups, warm" },
      { name: "butter", amount: "2 tbsp" },
      { name: "parmesan cheese", amount: "1/2 cup, grated" },
      { name: "thyme", amount: "1 tsp, fresh" },
      { name: "olive oil", amount: "2 tbsp" }
    ],
    instructions: [
      "Heat olive oil in a large pan. Add mushrooms and cook until browned. Remove and set aside.",
      "In the same pan, add butter and sauté onion until soft.",
      "Add garlic and cook for 30 seconds.",
      "Add arborio rice and stir to coat in butter. Cook for 2 minutes.",
      "Add white wine and stir until absorbed.",
      "Add warm broth, one ladle at a time, stirring constantly and waiting until each addition is absorbed before adding more.",
      "Continue until rice is creamy and cooked, about 20-25 minutes.",
      "Stir in cooked mushrooms, parmesan cheese, and thyme.",
      "Season with salt and pepper. Serve immediately."
    ],
    tags: ["italian", "main course", "vegetarian"]
  }
];
