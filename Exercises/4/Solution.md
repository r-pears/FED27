# DOM Manipulation and Event Handlers

## Selecting Elements

The DOM (Document Object Model) allows JavaScript to interact with HTML elements. Before manipulating elements, you need to select them.

### Exercise: Select Elements

Given the following HTML structure, write JavaScript to select the specified elements:

```html
<div id="container">
  <h1 class="title">Welcome</h1>
  <p class="description">This is a paragraph.</p>
  <ul id="item-list">
    <li class="item">Item 1</li>
    <li class="item">Item 2</li>
    <li class="item active">Item 3</li>
  </ul>
  <button data-action="submit">Submit</button>
</div>
```

```javascript
// 1. Select the element with id "container"
const container = document.getElementById("container");

// 2. Select all elements with class "item"
const items = document.querySelectorAll(".item");

// 3. Select the first element with class "title"
const title = document.querySelector(".title");

// 4. Select the button using its data attribute
const button = document.querySelector("button[data-action='submit']");

// 5. Select all <li> elements inside #item-list
const listElements = document.querySelectorAll("#item-list li");
```

### Exercise: Query Selector vs GetElement Methods

Explain the difference between these selection methods and when you would use each:

```javascript
document.getElementById('myId');
// I would use this to secect very particular elementby unique id
document.getElementsByClassName('myClass');
document.getElementsByTagName('div');
// Those return live html collection. I would not use it.
document.querySelector('.myClass'); // first of this class
document.querySelectorAll('.myClass');
// Those return non-live, so I would use those to have more controll.
```

## Modifying Elements

### Exercise: Change Text Content

Given a paragraph element, write code to:

```html
<p id="message">Original message</p>
```

```javascript
const message = document.getElementById('message');

// 1. Change the text to "Hello, World!"
message.textContent = "Hello, World!";

// 2. Append " Welcome!" to the existing text
message.textContent += " Welcome!";
```

### Exercise: Modify HTML Content

Given a div element, write code to:

```html
<div id="content"></div>
```

```javascript
const content = document.getElementById('content');

// 1. Add an h2 heading with text "News" inside the div
const heading = document.createElement("h2")
heading.textContent = "News";
content.appendChild(heading);

// 2. Add a paragraph below the heading with text "Latest updates"
const paragraph = document.createElement("p")
paragraph.textContent = "Latest updates";
content.appendChild(paragraph);

// 3. Clear all content from the div
content.innerHTML = "";
```

### Exercise: Working with Attributes

Given an image element, write code to:

```html
<img id="profile-pic" src="default.jpg" alt="Profile picture" />
```

```javascript
const img = document.getElementById('profile-pic');

// 1. Change the src to "user.jpg"
img.src = "user.jpg";

// 2. Add a "title" attribute with value "User Profile"
img.title = "User Profile";

// 3. Check if the element has a "data-loaded" attribute
console.log(img.hasAttribute("data-loaded"));

// 4. Remove the "alt" attribute
img.removeAttribute("alt");
```

### Exercise: Manipulating Styles

Given a box element, write code to:

```html
<div id="box">Styled Box</div>
```

```javascript
const box = document.getElementById('box');

// 1. Set the background color to blue
box.style.backgroundColor = "blue";

// 2. Set the width to 200px and height to 100px
box.style.width = "200px";
box.style.height = "100px";

// 3. Add padding of 20px and a 2px solid black border
box.style.padding = "20px";
box.style.border = "2px solid black";

// 4. Make the text white and center-aligned
box.style.color = "white";
box.style.textAlign = "center";
```

### Exercise: Working with Classes

Given an element with multiple classes:

```html
<div id="card" class="card shadow">Card content</div>
```

```javascript
const card = document.getElementById('card');

// 1. Add the class "highlighted"
card.classList.add("highlighted");

// 2. Remove the class "shadow"
card.classList.remove("shadow");

// 3. Toggle the class "active"
card.classList.toggle("active");

// 4. Check if the element has the class "card"
console.log(card.classList.contains("card"));

// 5. Replace "card" with "card-large";
card.classList.replace("card", "card-large");
```

## Creating and Removing Elements

### Exercise: Create Elements Dynamically

Write code to create the following structure dynamically (without innerHTML):

```html
<article class="post">
  <h3>Post Title</h3>
  <p>Post content goes here...</p>
  <footer>
    <span class="author">John Doe</span>
    <span class="date">2024-01-15</span>
  </footer>
</article>
```

```javascript
// Create the article element and all its children using createElement
// Then append it to document.body

const article = document.createElement('article');
article.classList.add('post');

const heading = document.createElement('h3');
heading.textContent = 'Post Title';
article.appendChild(heading);

const paragraph = document.createElement('p');
paragraph.textContent = 'Post content goes here...';
article.appendChild(paragraph);

const footer = document.createElement('footer');
article.appendChild(footer);

const spans = [
    { class: 'author', text: 'John Doe' },
    { class: 'date', text: '2024-01-15' },
];

spans.forEach(span => {
    const newSpan = document.createElement('span');
    newSpan.classList.add(span.class);
    newSpan.textContent = span.text;
    footer.appendChild(newSpan);
});

document.body.appendChild(article);
```

### Exercise: Build a List

Write a function that takes an array of items and creates an unordered list:

```javascript
function createList(items) {
    if (!Array.isArray(items) || items.length === 0) 
        throw new Error("'items' must be a non-empty array.");

    const list = document.createElement('ul');
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
    return list;
}

const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
const list = createList(fruits);
document.body.appendChild(list);

// Expected output in DOM:
// <ul>
//     <li>Apple</li>
//     <li>Banana</li>
//     <li>Orange</li>
//     <li>Mango</li>
// </ul>
```

### Exercise: Remove Elements

Given the following HTML:

```html
<ul id="tasks">
  <li id="task-1">Task 1</li>
  <li id="task-2">Task 2</li>
  <li id="task-3">Task 3</li>
</ul>
```

```javascript
// 1. Remove task-2 from the list
const tasks = document.getElementById("tasks");
const task2 = document.getElementById("task-2");
tasks.removeChild(task2);

// 2. Remove all <li> elements from the list
tasks.replaceChildren();

// 3. Remove the entire #tasks element
tasks.parentElement.removeChild(tasks);
```

## Event Handlers

### Exercise: Basic Click Event

Create a button that displays an alert when clicked:

```html
<button id="alert-btn">Click Me</button>
```

```javascript
// Add a click event listener that shows an alert saying "Button clicked!"
const button = document.getElementById('alert-btn');
button.addEventListener('click', () => alert('Button clicked!'));
```

### Exercise: Multiple Event Listeners

Given a button, add multiple event listeners:

```html
<button id="multi-btn">Hover and Click</button>
```

```javascript
const btn = document.getElementById('multi-btn');

// 1. On click: log "Button clicked" to the console
btn.addEventListener('click', () => console.log('Button clicked'));

// 2. On mouseenter: change background to yellow
btn.addEventListener('mouseenter', () => {
    btn.style.backgroundColor = 'yellow';
});

// 3. On mouseleave: reset background to default
btn.addEventListener('mouseleave', () => {
    btn.style.backgroundColor = '';
});
```

### Exercise: Input Events

Given an input field and a display paragraph:

```html
<input type="text" id="name-input" placeholder="Enter your name" />
<p id="greeting"></p>
```

```javascript
// As the user types, update the greeting paragraph to say "Hello, [name]!"
// If the input is empty, clear the greeting
const input = document.getElementById("name-input");
const greeting = document.getElementById("greeting");
input.addEventListener("input", () => {
    const name = input.value;
    greeting.textContent = name !== "" ? `Hello, ${name}!` : "";
});
```

### Exercise: Form Submission

Given a simple form:

```html
<form id="signup-form">
  <input type="text" id="username" placeholder="Username" required />
  <input type="email" id="email" placeholder="Email" required />
  <button type="submit">Sign Up</button>
</form>
<div id="result"></div>
```

```javascript
// 1. Prevent the default form submission
// 2. Get the values from both inputs
// 3. Display "Welcome, [username]! We'll contact you at [email]" in the result div
// 4. Clear the form after submission
const byId = id => document.getElementById(id);
const form = byId('signup-form');
const usernameInput = byId('username');
const emailInput = byId('email');
const result = byId('result');

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = usernameInput.value;
    const email = emailInput.value;
    if (username && email) {
        result.textContent = `Welcome, ${username}! We'll contact you at ${email}`;
        form.reset();
    }
});
```

### Exercise: Keyboard Events

Given a text input:

```html
<input type="text" id="search-input" placeholder="Press Enter to search" />
<p id="search-result"></p>
```

```javascript
// 1. When the user presses Enter, display "Searching for: [value]" in search-result
// 2. When the user presses Escape, clear the input and search-result
const byId = id => document.getElementById(id);
const input = byId('search-input');
const result = byId('search-result');

input.addEventListener('keydown', e => {
    switch (e.key) {
        case 'Enter':
            const value = input.value;
            result.textContent = `Searching for: ${value}`;
            break;
        case 'Escape':
            input.value = '';
            result.textContent = '';
            break;
        default:
    }
});
```

## Event Object

### Exercise: Event Properties

Given a clickable div:

```html
<div id="click-area" style="width: 300px; height: 200px; background: lightblue;">
  Click anywhere in this box
</div>
<p id="click-info"></p>
```

```javascript
// When the user clicks inside the div, display:
// - The x and y coordinates of the click (relative to the element)
// - Which mouse button was used (left, middle, right)
// - Whether any modifier keys were held (Ctrl, Shift, Alt)
const byId = id => document.getElementById(id);
const clickArea = byId('click-area');
const clickInfo = byId('click-info');

clickArea.addEventListener('click', e => {
    const { clientX: x, clientY: y } = e;
    const buttonsDict = {
        0: 'left',
        1: 'middle',
        2: 'right',
    };
    const buttonClicked = buttonsDict[e.button];
    let modifiers = [];
    let modifiersMsg;
    if (e.shiftKey) modifiers.push('shift');
    if (e.ctrlKey) modifiers.push('ctrl');
    if (e.altKey) modifiers.push('alt');

    if (modifiers.length === 0) modifiersMsg = 'no modifier keys were';
    else if (modifiers.length === 1) modifiersMsg = `${modifiers[0]} was`;
    else modifiersMsg = `${modifiers.join(', ')} were`;

    const msg = `Mouse ${buttonClicked} click registered at (${x}, ${y}); ${modifiersMsg} pressed.`;
    clickInfo.textContent = msg;
});
```

### Exercise: Event Target

Given a list of items:

```html
<ul id="menu">
  <li data-action="home">Home</li>
  <li data-action="about">About</li>
  <li data-action="contact">Contact</li>
</ul>
<p id="selected"></p>
```

```javascript
// Add a single click event listener to the <ul> element
// When any <li> is clicked, display the data-action value in #selected
// Use event.target to determine which item was clicked
const byId = id => document.getElementById(id);
const menu = byId('menu');
const selected = byId('selected');

menu.addEventListener("click", (e) => {
    const liTarget = e.target.closest('li');
    if (!liTarget) return;
    selected.textContent = liTarget.dataset.action;
});
```

## Event Delegation

### Exercise: Dynamic List with Delegation

Create a todo list where items can be added and removed:

```html
<input type="text" id="todo-input" placeholder="Add a todo" />
<button id="add-btn">Add</button>
<ul id="todo-list"></ul>
```

```javascript
// 1. When "Add" is clicked, create a new <li> with the input text
//    and a "Delete" button inside it
// 2. Use event delegation on #todo-list to handle delete button clicks
// 3. Clicking a delete button should remove its parent <li>
const byId = id => document.getElementById(id);
const addBtn = byId('add-btn');
const input = byId('todo-input');
const list = byId('todo-list');

addBtn.addEventListener('click', () => {
    const inputText = input.value;
    if (inputText === '') return;

    const newLi = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = inputText;
    newLi.appendChild(span);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    newLi.appendChild(deleteBtn);

    list.appendChild(newLi);
    input.value = '';
});

list.addEventListener('click', e => {
    const clickedBtn = e.target.closest('button');
    if (!clickedBtn) return;

    list.removeChild(clickedBtn.parentElement);
});

```

### Exercise: Table Row Selection

Given a table:

```html
<table id="data-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr data-id="1">
      <td>Alice</td>
      <td>alice@example.com</td>
    </tr>
    <tr data-id="2">
      <td>Bob</td>
      <td>bob@example.com</td>
    </tr>
    <tr data-id="3">
      <td>Charlie</td>
      <td>charlie@example.com</td>
    </tr>
  </tbody>
</table>
<p id="selected-row"></p>
```

```javascript
// 1. Add a click listener using event delegation
// 2. When a row in tbody is clicked, highlight it (add "selected" class)
// 3. Remove "selected" from any previously selected row
// 4. Display "Selected ID: [data-id]" in #selected-row
// 5. Ignore clicks on the header row
const byId = id => document.getElementById(id);
const table = byId('data-table');
const selected = byId('selected-row');
const tbody = table.querySelector('tbody');

table.addEventListener('click', e => {
    const clickedRow = e.target.closest('tr');
    if (!clickedRow || !tbody.contains(clickedRow)) return;
    tbody.querySelectorAll('tr').forEach(row => row.classList.remove('selected'));
    clickedRow.classList.add('selected');
    selected.textContent = `Selected ID: ${clickedRow.dataset.id}`;
});
```

## Preventing Default Behavior

### Exercise: Custom Link Behavior

Given a navigation link:

```html
<a href="https://example.com" id="custom-link">Click for custom action</a>
<p id="link-message"></p>
```

```javascript
// Prevent the default navigation and instead:
// 1. Display "You tried to visit: [href]" in #link-message
// 2. Change the link text to "Custom action performed!"
const byId = id => document.getElementById(id);
const link = byId('custom-link');
const msg = byId('link-message');

link.addEventListener('click', e => {
    e.preventDefault();
    msg.textContent = `You tried to visit: ${link.getAttribute('href')}`;
    link.textContent = 'Custom action performed!';
});
```

### Exercise: Validate Before Submit

Given a form with validation requirements:

```html
<form id="registration">
  <input type="text" id="password" placeholder="Password (min 8 chars)" />
  <input type="text" id="confirm" placeholder="Confirm password" />
  <p id="error" style="color: red;"></p>
  <button type="submit">Register</button>
</form>
```

```javascript
// Prevent form submission if:
// 1. Password is less than 8 characters
// 2. Passwords don't match
// Display appropriate error messages in #error
// Only allow submission if validation passes
const byId = id => document.getElementById(id);
const form = byId('registration');
const passwordInput = byId('password');
const confirmInput = byId('confirm');
const error = byId('error');

form.addEventListener('submit', e => {
    const password = passwordInput.value;
    const confirm = confirmInput.value;

    if (password.length < 8) {
        e.preventDefault();
        error.textContent = 'Password must be at least 8 characters long.';
        return;
    }

    if (password !== confirm) {
        e.preventDefault();
        error.textContent = "Passwords don't match.";
        return;
    }

    error.textContent = '';
});
```

## Event Propagation

### Exercise: Stop Propagation

Given nested elements:

```html
<div id="outer" style="padding: 50px; background: lightcoral;">
  Outer
  <div id="inner" style="padding: 30px; background: lightgreen;">
    Inner
    <button id="btn">Button</button>
  </div>
</div>
<p id="log"></p>
```

```javascript
// 1. Add click listeners to #outer, #inner, and #btn
// 2. Each should log its name to #log (append, don't replace)
// 3. Observe the bubbling behavior
// 4. Then modify so clicking the button ONLY logs "Button" (stop propagation)
const byId = id => document.getElementById(id);
const outer = byId('outer');
const inner = byId('inner');
const btn = byId('btn');
const log = byId('log');

[outer, inner, btn].forEach(el =>
    el.addEventListener('click', function (e) {
        e.stopPropagation();
        log.textContent += e.target.id + '\n';
    }),
);
```

### Exercise: Capture vs Bubble

Using the same HTML structure above:

```javascript
// 1. Add event listeners in the CAPTURE phase for all three elements
// 2. Log the order of events when clicking the button
// 3. Compare with the bubbling phase order
const byId = id => document.getElementById(id);
const outer = byId('outer');
const inner = byId('inner');
const btn = byId('btn');
const log = byId('log');

// capture outer => inner => btn
[outer, inner, btn].forEach(el =>
    el.addEventListener('click', function (e) {
        e.stopPropagation
        log.textContent += this.id + '\n';
    }, { capture: true }),
);

// bubble btn => inner => outer
[outer, inner, btn].forEach(el =>
    el.addEventListener('click', function (e) {
        e.stopPropagation
        log.textContent += this.id + '\n';
    }),
);
```