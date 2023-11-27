/**
 * Define the products array.
 * @type {Array<{ product: string, price: string }>}
 */
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

console.log("Exercise 1:");
products.forEach(product => console.log(product.product));

console.log("\nExercise 2:");
/**
 * @type {Array<{ product: string, price: string }>}
 */
const filteredProducts = products.filter(product => product.product.length <= 5);
console.log(filteredProducts);

console.log("\nExercise 3:");
/**
 * @type {number}
 */
const combinedPrice = products
  .filter(product => typeof product.price === 'string' && product.price.trim() !== '' && !isNaN(product.price))
  .map(product => Number(product.price))
  .reduce((acc, price) => acc + price, 0);
console.log(combinedPrice);

console.log("\nExercise 4:");
/**
 * @type {string}
 */
const concatenatedNames = products.reduce((acc, product) => acc === '' ? product.product : acc + ', ' + product.product, '');
console.log(concatenatedNames);

console.log("\nExercise 5:");
/**
 * @type {{ highest: { name: string, price: number }, lowest: { name: string, price: number } }}
 */
const { highest, lowest } = products.reduce((result, product) => {
  const price = Number(product.price);
  if (isNaN(price)) return result;

  if (!result.highest || price > result.highest.price) {
    result.highest = { name: product.product, price };
  }

  if (!result.lowest || price < result.lowest.price) {
    result.lowest = { name: product.product, price };
  }

  return result;
}, { highest: null, lowest: null });
console.log(`Highest: ${highest.name}. Lowest: ${lowest.name}`);

console.log("\nExercise 6:");
/**
 * @type {Array<[string, { name: string, cost: number }]>}
 */
const recreatedObject = Object.entries(products.reduce((acc, product) => {
  acc[product.product] = { name: product.product, cost: Number(product.price) || 0 };
  return acc;
}, {}));
console.log(recreatedObject);


