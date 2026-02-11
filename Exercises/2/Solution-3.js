// Create a function called `createCounter` that:

// 1. Takes a `startValue` parameter (default to 0)
// 2. Returns an object with three methods:
//     - `increment()` - increases the count by 1 and returns the new value
//     - `decrement()` - decreases the count by 1 and returns the new value
//     - `getCount()` - returns the current count without changing it
// 3. The count should be private (not directly accessible from outside)

import { isValidNumber } from './helpers.js';

const createCounter = (startValue = 0) => {
    if (!isValidNumber(startValue)) throw new Error('startValue must be a valid number.');

    let count = startValue;
    return Object.freeze({
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count,
    });
};

const counter = createCounter(5);
console.log(counter.getCount()); // 5
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.getCount()); // 6

const counter2 = createCounter(); // starts at 0
console.log(counter2.getCount()); // 0
