// Write a while loop that:

// 1. Starts with a number `n = 1`
// 2. Keeps doubling the number until it exceeds 1000
// 3. Counts how many iterations it took
// 4. Finally, prints the final number and the iteration count

let n = 1;
let i = 0;
while (n <= 1000) {
    n *= 2;
    i++;
};
console.log(`The final number is ${n}, it took ${i} iterations`);
