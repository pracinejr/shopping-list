const groceryList = [
  {
    id: 1,
    name: "milk",
    price: 3.5,
  },
  {
    id: 2,
    name: "eggs",
    price: 6,
  },
  {
    id: 3,
    name: "pizza rolls",
    price: 12.25,
  },
  {
    id: 4,
    name: "ground beef",
    price: 10.99,
  },
  {
    id: 5,
    name: "bananas",
    price: 4.5,
  },
  {
    id: 6,
    name: "everything bagels",
    price: 8.75,
  },
  {
    id: 7,
    name: "mayo",
    price: 5.95,
  },
  {
    id: 8,
    name: "chicken",
    price: 9,
  },
  {
    id: 9,
    name: "jalapenos",
    price: 25.99,
  },
  {
    id: 10,
    name: "avocados",
    price: 5.95,
  },
];

console.log(groceryList);

const addToShoppingList = (listObj) => {
  const lastIndex = groceryList.length - 1;
  const currentLastGrocery = groceryList[lastIndex];
  const maxId = currentLastGrocery.id;
  const idForNewGrocery = maxId + 1;

  listObj.id = idForNewGrocery;

  groceryList.push(listObj);
};

const moreNewerGrocerys = {
  name: "cream cheese",
  price: 7.89,
};
const newGroceryCheese = {
  name: "cheese",
  price: 4.25,
};
const newGroceryChips = {
  name: "chips",
  price: 9,
};
const newGrocerySalsa = {
  name: "salsa",
  price: 12,
};
const newGroceryFrozenPizza = {
  name: "frozen pizza",
  price: 16,
};

addToShoppingList(moreNewerGrocerys);
addToShoppingList(newGroceryCheese);
addToShoppingList(newGroceryChips);
addToShoppingList(newGrocerySalsa);
addToShoppingList(newGroceryFrozenPizza);

const createGroceryDate = (groceryCurrentDate) => {
  const currentDate = new Date().toLocaleString();
  // const dateTime =
  //   currentDate.getMonth() +
  //   1 +
  //   "/" +
  //   (currentDate.getDay() - 1) +
  //   "/" +
  //   currentDate.getFullYear() +
  //   " " +
  //   "@" +
  //   " " +
  //   currentDate.getHours() +
  //   ":" +
  //   currentDate.getMinutes() +
  //   ":" +
  //   currentDate.getSeconds();
  // const dateForNewGrocery = dateTime;

  groceryCurrentDate.dateOfEntry = currentDate;
  groceryList.push(groceryCurrentDate);
};
createGroceryDate(moreNewerGrocerys);
console.log(moreNewerGrocerys);
createGroceryDate(newGroceryCheese);
console.log(newGroceryCheese);
createGroceryDate(newGroceryChips);
console.log(newGroceryChips);
createGroceryDate(newGrocerySalsa);
console.log(newGrocerySalsa);
createGroceryDate(newGroceryFrozenPizza);
console.log(newGroceryFrozenPizza);
