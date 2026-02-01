# JavaScript Execution Model

## Predict the outcome of the following code

Try and understand the output before running it.
Explain why it runs in this order.

```javascript
console.log('A');

setTimeout(() => {
  console.log('B');

  Promise.resolve().then(() => {
    console.log('C');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('D');
});

(async function () {
  console.log('E');
  await Promise.resolve();
  console.log('F');
})();

console.log('G');
```
