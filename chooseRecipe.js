const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // check the recipe against the bakery
  const ingredientCheck = (b, r) => {
    for (const i of r) {
      for (const s of b) {
        // if ingredient is in stock
        if (s === i) return true;
      }
    }
  };
  for (const r of recipes) {
    if (
      ingredientCheck(bakeryA, r.ingredients) &&
      ingredientCheck(bakeryB, r.ingredients)
    ) {
      return r.name;
    }
  }
  return 'Nothing worked for both bakeries, so the bakers started a food fight instead. It was fun.';
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base'],
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese'],
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef'],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate'],
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey'],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins'],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
