/**
 * Define the 'names' array.
 * @type {string[]}
 */
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

/**
 * Define the 'provinces' array.
 * @type {string[]}
 */
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

/**
 * Exercise 1: Use forEach to console log each name to the console.
 */
console.log("Exercise 1:");
names.forEach((name) => console.log(name));

/**
 * Exercise 2: Use forEach to console log each name with a matching province.
 */
console.log("\nExercise 2:");
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

/**
 * Exercise 3: Using map, loop over all province names and turn the string to all uppercase. Log the new array to the console.
 */
console.log("\nExercise 3:");
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces);

/**
 * Exercise 4: Create a new array with map that has the amount of characters in each name.
 * The result should be: [6, 9, 11, 5, 7, 7]
 */
console.log("\nExercise 4:");
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

/**
 * Exercise 5: Using toSorted to sort all provinces alphabetically.
 */
console.log("\nExercise 5:");
const sortedProvinces = provinces.slice().sort();
console.log(sortedProvinces);

/**
 * Exercise 6: Use filter to remove all provinces that have the word Cape in them.
 * After filtering the array, return the amount of provinces left. The final value should be 3.
 */
console.log("\nExercise 6:");
const filteredProvinces = provinces.filter((province) => !province.includes("Cape"));
console.log(filteredProvinces.length);

/**
 * Exercise 7: Create a boolean array by using map and some to determine whether a name contains an S character.
 * The result should be [true, true, false, true, true, false].
 */
console.log("\nExercise 7:");
const containsS = names.map((name) => name.includes("S"));
console.log(containsS);

/**
 * Exercise 8: Using only reduce, turn the above into an object that indicates the province of an individual.
 */
console.log("\nExercise 8:");
const provinceObject = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(provinceObject);


