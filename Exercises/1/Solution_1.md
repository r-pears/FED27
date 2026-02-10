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

# Line by line order:

- A => call stack
- B => task queue
- C => microtask queue (queued during the B callback)
- D => microtask queue
- E => call stack
- F => microtask queue
- G => call stack

# Event loop:

- Call stack: A, E, G
- Microtask queue: D, F
- Task queue: B
- Microtasks after B: C

# Result:

A
E
G
D
F
B
C
