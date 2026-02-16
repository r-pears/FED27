// ============================================
// EXERCISE 3: Array Methods
// ============================================

// ============================================
// MAP() EXERCISES
// ============================================

// Exercise: Double the Numbers
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log('Doubled:', doubled); // [2, 4, 6, 8, 10]

// Exercise: Extract Property Values
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
];
const names = users.map((user) => user.name);
console.log('Names:', names); // ['Alice', 'Bob', 'Charlie']

// Exercise: Transform Objects
const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Phone', price: 699 },
  { name: 'Tablet', price: 499 },
];
const productStrings = products.map(
  (product) => `${product.name}: $${product.price}`
);
console.log('Product strings:', productStrings);
// ['Laptop: $999', 'Phone: $699', 'Tablet: $499']

// ============================================
// FILTER() EXERCISES
// ============================================

// Exercise: Filter Even Numbers
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = allNumbers.filter((num) => num % 2 === 0);
console.log('Even numbers:', evenNumbers); // [2, 4, 6, 8, 10]

// Exercise: Filter by Property
const allProducts = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Phone', price: 699, inStock: false },
  { name: 'Tablet', price: 499, inStock: true },
  { name: 'Watch', price: 299, inStock: false },
];
const inStockProducts = allProducts.filter((product) => product.inStock);
console.log('In stock:', inStockProducts);
// [{ name: 'Laptop', ... }, { name: 'Tablet', ... }]

// Exercise: Filter with Multiple Conditions
const allUsers = [
  { name: 'Alice', age: 25, active: true },
  { name: 'Bob', age: 17, active: true },
  { name: 'Charlie', age: 30, active: false },
  { name: 'Diana', age: 22, active: true },
];
const activeAdults = allUsers.filter((user) => user.age > 18 && user.active);
console.log('Active adults:', activeAdults);
// [{ name: 'Alice', ... }, { name: 'Diana', ... }]

// ============================================
// FIND() AND FINDINDEX() EXERCISES
// ============================================

// Exercise: Find a User
const usersWithRoles = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
  { id: 3, name: 'Charlie', role: 'user' },
  { id: 4, name: 'Diana', role: 'moderator' },
];
const user3 = usersWithRoles.find((user) => user.id === 3);
console.log('User with id 3:', user3);
// { id: 3, name: 'Charlie', role: 'user' }

// Exercise: Find Index of First Match
const numbersForIndex = [12, 34, 45, 67, 89, 23];
const indexOver50 = numbersForIndex.findIndex((num) => num > 50);
console.log('Index of first number > 50:', indexOver50); // 3 (index of 67)

// ============================================
// SOME() AND EVERY() EXERCISES
// ============================================

// Exercise: Check for Admin
const teamUsers = [
  { name: 'Alice', role: 'user' },
  { name: 'Bob', role: 'admin' },
  { name: 'Charlie', role: 'user' },
];
const hasAdmin = teamUsers.some((user) => user.role === 'admin');
console.log('Has admin:', hasAdmin); // true

// Exercise: Validate All Fields
const formData = ['John', 'john@email.com', '123 Main St'];
const allFilled = formData.every((field) => field.length > 0);
console.log('All fields filled:', allFilled); // true

const incompleteForm = ['John', '', '123 Main St'];
const incompleteFilled = incompleteForm.every((field) => field.length > 0);
console.log('Incomplete form filled:', incompleteFilled); // false

// ============================================
// INCLUDES() AND INDEXOF() EXERCISES
// ============================================

// Exercise: Check Membership
const allowedRoles = ['admin', 'moderator', 'editor'];
const userRole = 'moderator';
const isAllowed = allowedRoles.includes(userRole);
console.log('Role is allowed:', isAllowed); // true

// Exercise: Find Position
const colors = ['red', 'green', 'blue', 'yellow'];
const blueIndex = colors.indexOf('blue');
console.log('Index of blue:', blueIndex); // 2

// ============================================
// REDUCE() EXERCISES
// ============================================

// Exercise: Sum of Numbers
const numbersToSum = [10, 20, 30, 40, 50];
const sum = numbersToSum.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum); // 150

// Exercise: Find Maximum Value
const numbersForMax = [23, 45, 12, 67, 34, 89, 21];
const max = numbersForMax.reduce((max, num) => (num > max ? num : max));
console.log('Max:', max); // 89

// Alternative using Math.max
const maxAlt = numbersForMax.reduce((max, num) => Math.max(max, num));
console.log('Max (alt):', maxAlt); // 89

// Exercise: Count Occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log('Fruit count:', fruitCount);
// { apple: 3, banana: 2, orange: 1 }

// Exercise: Group by Property
const people = [
  { name: 'Alice', city: 'New York' },
  { name: 'Bob', city: 'London' },
  { name: 'Charlie', city: 'New York' },
  { name: 'Diana', city: 'London' },
];
const groupedByCity = people.reduce((acc, person) => {
  if (!acc[person.city]) {
    acc[person.city] = [];
  }
  acc[person.city].push(person.name);
  return acc;
}, {});
console.log('Grouped by city:', groupedByCity);
// { 'New York': ['Alice', 'Charlie'], 'London': ['Bob', 'Diana'] }

// ============================================
// SORT() EXERCISES
// ============================================

// Exercise: Sort Numbers
const numbersToSort = [10, 5, 40, 25, 100, 1];

// Wrong way (sorts as strings):
const wrongSort = [...numbersToSort].sort();
console.log('Wrong sort:', wrongSort); // [1, 10, 100, 25, 40, 5]

// Correct way (ascending):
const sortedAsc = [...numbersToSort].sort((a, b) => a - b);
console.log('Sorted ascending:', sortedAsc); // [1, 5, 10, 25, 40, 100]

// Exercise: Sort Objects by Property
const productsToSort = [
  { name: 'Laptop', price: 999 },
  { name: 'Phone', price: 699 },
  { name: 'Tablet', price: 499 },
  { name: 'Watch', price: 299 },
];
const sortedByPrice = [...productsToSort].sort((a, b) => a.price - b.price);
console.log('Sorted by price:');
sortedByPrice.forEach((p) => console.log(`  ${p.name}: $${p.price}`));
// Watch: $299, Tablet: $499, Phone: $699, Laptop: $999

// Exercise: Sort Strings (Case Insensitive)
const namesToSort = ['charlie', 'Alice', 'bob', 'Diana'];
const sortedNames = [...namesToSort].sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase())
);
console.log('Sorted names:', sortedNames); // ['Alice', 'bob', 'charlie', 'Diana']

// ============================================
// FLAT() AND FLATMAP() EXERCISES
// ============================================

// Exercise: Flatten Nested Arrays
const nested = [1, [2, 3], [4, [5, 6]]];
const flattened = nested.flat(Infinity); // Use Infinity for deep flattening
console.log('Flattened:', flattened); // [1, 2, 3, 4, 5, 6]

// Alternative: flat(2) for 2 levels deep
const flatTwo = nested.flat(2);
console.log('Flat 2 levels:', flatTwo); // [1, 2, 3, 4, 5, 6]

// Exercise: flatMap for Data Transformation
const usersWithTags = [
  { name: 'Alice', tags: ['javascript', 'react'] },
  { name: 'Bob', tags: ['python', 'django'] },
  { name: 'Charlie', tags: ['javascript', 'node'] },
];
const allTags = usersWithTags.flatMap((user) => user.tags);
console.log('All tags:', allTags);
// ['javascript', 'react', 'python', 'django', 'javascript', 'node']

// This is equivalent to:
const allTagsAlt = usersWithTags.map((user) => user.tags).flat();
console.log('All tags (alt):', allTagsAlt);

// ============================================
// SLICE() AND SPLICE() EXERCISES
// ============================================

// Exercise: Get Last N Elements
function getLastN(arr, n) {
  return arr.slice(-n);
}
console.log('Last 3:', getLastN([1, 2, 3, 4, 5], 3)); // [3, 4, 5]
console.log('Last 2:', getLastN([1, 2, 3, 4, 5], 2)); // [4, 5]

// Exercise: Remove and Insert
const letters = ['a', 'b', 'c', 'd', 'e'];
letters.splice(1, 2, 'x', 'y'); // At index 1, remove 2 items, insert 'x' and 'y'
console.log('After splice:', letters); // ['a', 'x', 'y', 'd', 'e']

// ============================================
// CHAINING ARRAY METHODS
// ============================================

// Exercise: Chain filter and map
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSquares = nums.filter((num) => num % 2 === 0).map((num) => num * num);
console.log('Squares of even numbers:', evenSquares);
// [4, 16, 36, 64, 100]

// Exercise: Complete Data Pipeline
const orders = [
  { id: 1, status: 'completed', total: 100 },
  { id: 2, status: 'pending', total: 200 },
  { id: 3, status: 'completed', total: 150 },
  { id: 4, status: 'cancelled', total: 75 },
  { id: 5, status: 'completed', total: 300 },
];

const totalRevenue = orders
  .filter((order) => order.status === 'completed')
  .map((order) => order.total)
  .reduce((sum, total) => sum + total, 0);

console.log('Total revenue:', totalRevenue); // 550

// Alternative: Using reduce directly after filter
const totalRevenueAlt = orders
  .filter((order) => order.status === 'completed')
  .reduce((sum, order) => sum + order.total, 0);

console.log('Total revenue (alt):', totalRevenueAlt); // 550

// Exercise: Top 3 Expensive In-Stock Products
const inventory = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Phone', price: 699, inStock: false },
  { name: 'Tablet', price: 499, inStock: true },
  { name: 'Watch', price: 299, inStock: true },
  { name: 'Headphones', price: 199, inStock: true },
  { name: 'Monitor', price: 599, inStock: true },
];

const top3InStock = inventory
  .filter((product) => product.inStock)
  .sort((a, b) => b.price - a.price)
  .slice(0, 3)
  .map((product) => product.name);

console.log('Top 3 expensive in-stock:', top3InStock);
// ['Laptop', 'Monitor', 'Tablet']

// ============================================
// PRACTICAL CHALLENGES
// ============================================

// Challenge: Remove Duplicates
function removeDuplicates(arr) {
  // Method 1: Using Set
  return [...new Set(arr)];
}

function removeDuplicatesAlt(arr) {
  // Method 2: Using filter and indexOf
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log('Remove dups (Set):', removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// [1, 2, 3, 4, 5]

console.log(
  'Remove dups (filter):',
  removeDuplicatesAlt(['a', 'b', 'a', 'c', 'b'])
);
// ['a', 'b', 'c']

// Challenge: Find Missing Items
function findMissing(arr1, arr2) {
  return arr1.filter((item) => !arr2.includes(item));
}

const required = ['passport', 'ticket', 'visa', 'insurance'];
const packed = ['ticket', 'passport'];

console.log('Missing items:', findMissing(required, packed));
// ['visa', 'insurance']

// Challenge: Paginate Results
function paginate(array, pageSize, pageNumber) {
  const startIndex = (pageNumber - 1) * pageSize;
  return array.slice(startIndex, startIndex + pageSize);
}

const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

console.log('Page 1:', paginate(items, 3, 1)); // ['a', 'b', 'c']
console.log('Page 2:', paginate(items, 3, 2)); // ['d', 'e', 'f']
console.log('Page 3:', paginate(items, 3, 3)); // ['g', 'h', 'i']
console.log('Page 4:', paginate(items, 3, 4)); // ['j']
