// The function must accept three parameters:

// - number1 (a number)
// - number2 (a number)
// - operation (a string)

// Supported operations:

// - "add"
// - "subtract"
// - "multiply"
// - "divide"

// The function must:

// - Perform the correct calculation based on the operation
// - Return the result
// - Return a helpful message if the operation is invalid
// - The function must not prompt the user or use the DOM.
// - All results must be displayed using console.log.

import { isValidNumber } from './helpers.js';

const calculate = (number1, number2, operation) => {
    if (!isValidNumber(number1) || !isValidNumber(number2)) {
        console.log('Invalid input: both values must be valid numbers.');
        return null;
    }

    const n1 = Number(number1);
    const n2 = Number(number2);
    let result;
    let operator;

    switch (operation) {
        case 'add':
            operator = '+';
            result = n1 + n2;
            break;
        case 'subtract':
            operator = '-';
            result = n1 - n2;
            break;
        case 'multiply':
            operator = '*';
            result = n1 * n2;
            break;
        case 'divide':
            operator = '/';
            if (n2 === 0) {
                console.log(`${n1} ${operator} ${n2} : Division by zero is not allowed.`);
                return null;
            }
            result = n1 / n2;
            return result;
        default:
            console.log(`Invalid operation "${operation}"`);
            return null;
    }

    console.log(`${n1} ${operator} ${n2} = ${result}`);
    return result;
};

const testCases = [
    { n1: 2, n2: 3, op: 'add', expected: 5 },
    { n1: 10, n2: 4, op: 'subtract', expected: 6 },
    { n1: 6, n2: 7, op: 'multiply', expected: 42 },
    { n1: 8, n2: 2, op: 'divide', expected: 4 },
    { n1: 5, n2: 0, op: 'divide', expected: null },
    { n1: -3, n2: 9, op: 'add', expected: 6 },
    { n1: 3.5, n2: 2, op: 'multiply', expected: 7 },
    { n1: '12', n2: '3', op: 'divide', expected: 4 },
    { n1: '', n2: 2, op: 'add', expected: null },
    { n1: 1, n2: 2, op: 'mod', expected: null },
];

const testMyFunction = () => {
    console.log('========== testing ==========');
    const numTests = testCases.length;
    const failedTests = [];

    testCases.forEach(t => {
        const result = calculate(t.n1, t.n2, t.op);
        if (result !== t.expected) {
            const message = `${t.n1} ${t.op} ${t.n2} expected: ${t.expected}, got: ${result}`;
            failedTests.push(message);
        }
    });

    console.log('=============================');

    if (failedTests.length === 0) {
        console.log(`Pass: [${numTests}/${numTests}]. Function calculate() works as expected.`);
    } else {
        console.log(`Pass: [${numTests - failedTests.length}/${numTests}]. Some tests failed:`);
        failedTests.forEach(msg => console.log(msg));
    }
};

testMyFunction();
