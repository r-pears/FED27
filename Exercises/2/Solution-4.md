```javascript
for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}
```
### Part A:

This loop outputs 4, 4, 4 (one per second).
* `var i` scope is function, not block, so it is not affected by `setTimeout()`
* at first: loop finishes very quickly and after that the value if `i` is 4.
* than the callback is called three times and this final `i` is passed to it every time.

### Part B:
Fix the code using a closure (without changing `var` to `let`).
```javascript
for (var i = 1; i <= 3; i++) {
    (j => {
        setTimeout(() => {
            console.log(j);
        }, j * 1000);
    })(i);
}
```
### Part C:
Fix the code by using `let` instead.
```javascript
for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}
```