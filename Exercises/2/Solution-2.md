## Snippet A:

```javascript
console.log(a);
console.log(b);
var a = 1;
let b = 2;
```
**Outcome:** 

`undefined` and then a ReferenceError

**Explanation:**

The interpreter sees this code as:
```javascript
var a;
console.log(a);
console.log(b);
a = 1;
let b = 2;
```
Because `var a` is hoisted to the beginning, it is declared but not assigned. Hence `undefined`. `let b` is not declared before it is called, so a ReferenceError is thrown.

## Snippet B:

```javascript
sayHello();
sayGoodbye();

function sayHello() {
    console.log('Hello!');
}

var sayGoodbye = function() {
    console.log('Goodbye!');
};
```
**Outcome:** 

`Hello!` and then a TypeError

**Explanation:**

The interpreter sees this code as:

```javascript
function sayHello() {
    console.log('Hello!');
}
var sayGoodbye;

sayHello();
sayGoodbye();

sayGoodbye = function() {
    console.log('Goodbye!');
};
```
Function `sayHello()` is hoisted first, then `var sayGoodbye`, which is only declared but not assigned a function. The first call works, but the second tries to call `undefined` as a function, so we get a TypeError.

## Snippet C:

```javascript
var x = 10;

function foo() {
    console.log(x);
    var x = 20;
    console.log(x);
}

foo();
```
**Outcome:** 

`undefined` `20`

**Explanation:**

Here we have two `var x` in two different scopes: one local (to `foo`) and one global. When `foo` is initialized, it finds the local `x` and therefore ignores the global one. The interpreter sees the function code after hoisting as:
```javascript
function foo() {
    var x;
    console.log(x);
    x = 20;
    console.log(x);
}
```
So on the first log, `x` is declared but `undefined`, and by the second it has been assigned a value.