const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let elements = [];

const ingredientsList = document.querySelector('ul');
ingredients.forEach(el => {
  const liIngredients = document.createElement('li');
liIngredients.classList.add('item');
liIngredients.textContent = el;
elements.push(liIngredients);
});

ingredientsList.append(...elements);



